package com.itdev.mangas.web;


import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itdev.mangas.domain.Manga;
import com.itdev.mangas.domain.Page;
import com.itdev.mangas.domain.User;
import com.itdev.mangas.service.MangaService;
import com.itdev.mangas.service.UserService;

@RestController
@RequestMapping("api")
public class MangaController {

	@Autowired
	private UserService userService;
	@Autowired
	private MangaService mangaService;
	
	@RequestMapping(
            value = "/saveManga/{emailUser}",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> saveManga(@PathVariable String emailUser, @RequestBody Manga manga) {
		
		User user = userService.findUserByEmail(emailUser);
		mangaService.createManga(manga, user);
		return new ResponseEntity<>(manga, HttpStatus.OK);
        
    }
	
	@RequestMapping(
            value = "/getMangas",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMangas(@RequestBody User user) {
		Set<Manga> mangas = userService.findUserByEmailAndPassword(user.getEmail(), user.getPassword()).getMangas();
		if(mangas.equals(null)){
            return new ResponseEntity<Set<Manga>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
		
        return new ResponseEntity<Set<Manga>>(mangas, HttpStatus.OK);
		        
    }
	
}

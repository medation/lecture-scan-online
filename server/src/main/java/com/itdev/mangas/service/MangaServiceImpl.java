package com.itdev.mangas.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itdev.mangas.domain.Manga;
import com.itdev.mangas.domain.User;
import com.itdev.mangas.repository.MangaRepository;
import com.itdev.mangas.repository.UserRepository;

@Service("mangaService")
public class MangaServiceImpl implements MangaService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MangaRepository mangaRepository;
	
	@Override
	public List<Manga> getMangasByUser(User user) {
		User userFound = userRepository.findOne(user.getId());
		List<Manga> mangas = (List<Manga>) userFound.getMangas();
		return mangas;
	}

	@Override
	public void createManga(Manga manga, User user) {
		manga.setUser(user);
		mangaRepository.save(manga);
	}

	
}

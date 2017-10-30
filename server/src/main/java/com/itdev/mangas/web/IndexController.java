package com.itdev.mangas.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.itdev.mangas.service.UserService;


@Controller
@RequestMapping("")
public class IndexController {

	@Autowired
    private UserService userService;
    
	@RequestMapping(value="/index", method = RequestMethod.GET)
	public String index(){
		userService.populateSampleData();
		return "index";
	}
}

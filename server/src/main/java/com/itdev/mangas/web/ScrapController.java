package com.itdev.mangas.web;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.HandlerMapping;

import com.itdev.mangas.domain.Chapitre;
import com.itdev.mangas.domain.Manga;
import com.itdev.mangas.domain.Page;

@RestController
public class ScrapController {

	@RequestMapping(value = "/listMangas", method = RequestMethod.GET)
	@CrossOrigin(origins = {"http://localhost:8100","file://"})
	public ResponseEntity<List<Manga>> listAllManga() throws IOException {
		
		List<Manga> mangas = new ArrayList<Manga>();
		
		String baseUrl = "http://www.japscan.com/mangas/";
		
		Connection connection = Jsoup.connect(baseUrl);
		connection.timeout(12000);
		Document doc = connection.get();
		
		Elements divMangas = doc.select("div.row");
		
		for(Element divManga : divMangas)
		{
			
			
			Element title = divManga.select("div.cell a").first();
			Element category = divManga.select("div.cell").get(1);
			Element status = divManga.select("div.cell").get(2);
			Element a = divManga.select("div.cell a").first();
			String url = a.attr("href").substring(8);
			
			Manga manga = new Manga(title.text(),category.text(),status.text(),url);
			
			mangas.add(manga);
		}
		
		if(mangas.isEmpty()){
            return new ResponseEntity<List<Manga>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
		
        return new ResponseEntity<List<Manga>>(mangas, HttpStatus.OK);
		
	}	
	
	@RequestMapping(value = "infosManga/{url}", method = RequestMethod.GET)
	@CrossOrigin(origins = {"http://localhost:8100","file://"})
	public ResponseEntity<List<Chapitre>> infosManga(@PathVariable String url) throws IOException {
		
		
		String baseUrl = "http://www.japscan.com/mangas/";
		
		Connection connection = Jsoup.connect(baseUrl+url);
		connection.timeout(12000);
		Document doc = connection.get();
		
		Manga manga = new Manga();
		
		Element resume = doc.select("div#synopsis").first();
		
		manga.setResume(resume.text());
		
		Elements divChapitres = doc.select("div#liste_chapitres ul");
		
		List<Chapitre> chapitres = new ArrayList<Chapitre>();
		
		for(Element divChapitre : divChapitres)
		{
			Element title = divChapitre.select("li a").first();
			Element urltoChapitre = divChapitre.select("li a").first();
			Chapitre chapitre = new Chapitre (title.text(),urltoChapitre.attr("href"));
			chapitres.add(chapitre);
		}
		
		manga.setChapitres(chapitres);
		
		if(chapitres.equals(null)){
            return new ResponseEntity<List<Chapitre>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
		
        return new ResponseEntity<List<Chapitre>>(chapitres, HttpStatus.OK);
		
	}
	
	@RequestMapping(value = "lecture/**", method = RequestMethod.GET)
	@CrossOrigin(origins = {"http://localhost:8100","file://"})
	public ResponseEntity<List<Page>> lecture(HttpServletRequest request) throws IOException {
		
		List<Page> pages = new ArrayList<Page>();
		//www.japscan.com/lecture-en-ligne/one-piece/882/
		
		String req = (String) request.getAttribute( HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE );
		String url = req.substring(9);
		
		Connection connection = Jsoup.connect("http://"+url);
		connection.timeout(2000);
		
		Document doc = connection.get();
		
		
		
		int j = doc.select("nav#pagination ul li").size();
		int nbrPage = Integer.parseInt(doc.select("nav#pagination ul li").get(j-3).text());
		
		
		for(int i = 1; i < nbrPage+1 ; i++)
		{
			
			doc = connection.get();
			Element img = doc.select("img#image").first();
			Page page = new Page(i,img.absUrl("src"));
			pages.add(page);
			String urlNext = doc.select("a#img_link").attr("href");
			connection = Jsoup.connect("http://www.japscan.com"+urlNext);
			connection.timeout(2000);
		}
		
		if(pages.equals(null)){
            return new ResponseEntity<List<Page>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
		
        return new ResponseEntity<List<Page>>(pages, HttpStatus.OK);
		
	}
	
}

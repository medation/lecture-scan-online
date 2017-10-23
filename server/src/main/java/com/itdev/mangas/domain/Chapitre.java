package com.itdev.mangas.domain;

import java.util.List;

public class Chapitre {

	private String title;
	private String urlToChapitre;
	private List<Page> pages;

	
	
	public Chapitre(String title, String urlToChapitre, List<Page> pages) {
		super();
		this.title = title;
		this.urlToChapitre = urlToChapitre;
		this.pages = pages;
	}
	
	public Chapitre(String title, String urlToChapitre) {
		super();
		this.title = title;
		this.urlToChapitre = urlToChapitre;
	}

	public Chapitre() {
		super();
	}


	

	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public String getUrlToChapitre() {
		return urlToChapitre;
	}



	public void setUrlToChapitre(String urlToChapitre) {
		this.urlToChapitre = urlToChapitre;
	}



	public List<Page> getPages() {
		return pages;
	}



	public void setPages(List<Page> pages) {
		this.pages = pages;
	}


}

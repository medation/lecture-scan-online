package com.itdev.mangas.domain;

import java.util.List;

public class Manga {

	private String title;
	private String category;
	private String statue;
	private String url;
	private String resume;
	private List<Chapitre> chapitres;
	private int nbrTome;
	
	
	
	public Manga() {
		super();
	}

	public Manga(String title, String category, String statue, String url, String resume, List<Chapitre> chapitres,
			int nbrTome) {
		super();
		this.title = title;
		this.category = category;
		this.statue = statue;
		this.url = url;
		this.resume = resume;
		this.chapitres = chapitres;
		this.nbrTome = nbrTome;
	}


	public Manga(String title, String category, String statue, String url) {
		super();
		this.title = title;
		this.category = category;
		this.statue = statue;
		this.url = url;
	}




	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getStatue() {
		return statue;
	}

	public void setStatue(String statue) {
		this.statue = statue;
	}

	public int getNbrTome() {
		return nbrTome;
	}

	public void setNbrTome(int nbrTome) {
		this.nbrTome = nbrTome;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getResume() {
		return resume;
	}

	public void setResume(String resume) {
		this.resume = resume;
	}

	public List<Chapitre> getChapitres() {
		return chapitres;
	}

	public void setChapitres(List<Chapitre> chapitres) {
		this.chapitres = chapitres;
	}
	
	
	
}

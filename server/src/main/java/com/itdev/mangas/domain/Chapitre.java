package com.itdev.mangas.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "chapitres")
public class Chapitre {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
    
	private String title;
	private String urlToChapitre;
	
	@OneToMany(mappedBy = "chapitre", cascade = CascadeType.ALL)
	private List<Page> pages;

	@ManyToOne
	@JsonIgnore
    @JoinColumn(name = "manga_id")
	private Manga manga;
	
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

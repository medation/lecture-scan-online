package com.itdev.mangas.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "pages")
public class Page{
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
    
	private int numero;
	private String urlToImage;
	
	@ManyToOne
	@JsonIgnore
    @JoinColumn(name = "chapitre_id")
	private Chapitre chapitre;
	
	public Page() {
		super();
	}
	public Page(int numero, String urlToImage) {
		super();
		this.numero = numero;
		this.urlToImage = urlToImage;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getUrlToImage() {
		return urlToImage;
	}
	public void setUrlToImage(String urlToImage) {
		this.urlToImage = urlToImage;
	} 
			
}
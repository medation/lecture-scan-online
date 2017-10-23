package com.itdev.mangas.domain;

public class Page{
	
	private int numero;
	private String urlToImage;
	
	
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
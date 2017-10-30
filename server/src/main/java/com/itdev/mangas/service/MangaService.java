package com.itdev.mangas.service;

import java.util.List;

import com.itdev.mangas.domain.Manga;
import com.itdev.mangas.domain.User;

public interface MangaService {

	List<Manga> getMangasByUser(User user);
	void createManga(Manga manga, User user);
}

package com.itdev.mangas.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itdev.mangas.domain.Manga;

@Repository("mangaRepository")
public interface MangaRepository extends CrudRepository<Manga, Long> {


}

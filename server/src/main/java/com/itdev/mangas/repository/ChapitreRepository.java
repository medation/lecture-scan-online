package com.itdev.mangas.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.itdev.mangas.domain.Chapitre;

@Repository("chapitreRepository")
public interface ChapitreRepository extends CrudRepository<Chapitre, Long> {

}

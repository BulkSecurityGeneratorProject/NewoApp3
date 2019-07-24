package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Ciudad;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Ciudad entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CiudadRepository extends JpaRepository<Ciudad, Long>, JpaSpecificationExecutor<Ciudad> {

}

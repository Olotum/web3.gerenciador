package com.web3.gerenciador.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.web3.gerenciador.entities.Filial;

public interface FilialRepository extends JpaRepository<Filial, Double>{
	
	@Query("SELECT obj FROM Filial obj WHERE obj.total_vendido BETWEEN :min AND :max ORDER BY obj.total_vendido DESC")
	Page<Filial> findFilial(Double min, Double max, Pageable pageable);

}

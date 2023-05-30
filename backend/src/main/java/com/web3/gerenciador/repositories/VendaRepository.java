package com.web3.gerenciador.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.web3.gerenciador.entities.Venda;

public interface VendaRepository extends JpaRepository<Venda, Long>{
	
	@Query("SELECT obj FROM Venda obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.valor DESC")
	Page<Venda> findVendas(LocalDate min, LocalDate max, Pageable pageable);

}

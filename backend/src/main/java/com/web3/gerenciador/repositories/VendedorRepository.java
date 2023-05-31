package com.web3.gerenciador.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.web3.gerenciador.entities.Vendedor;

public interface VendedorRepository extends JpaRepository<Vendedor, Double>{
	
	@Query("SELECT obj FROM Vendedor obj WHERE obj.total_vendido BETWEEN :min AND :max ORDER BY obj.total_vendido DESC")
	Page<Vendedor> findVendedor(Double min, Double max, Pageable pageable);

	
}

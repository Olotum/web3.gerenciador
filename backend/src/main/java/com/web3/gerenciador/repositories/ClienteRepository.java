package com.web3.gerenciador.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.web3.gerenciador.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	
	@Query("SELECT obj FROM Cliente obj WHERE obj.numero_compras BETWEEN :min AND :max ORDER BY obj.valor_total DESC")
	Page<Cliente> findCliente(Long min, Long max, Pageable pageable);
	
	@Query("SELECT COUNT(v) FROM Venda v WHERE v.cliente = :cliente")
    Long countCompras(@Param("cliente") Cliente cliente);

}

    


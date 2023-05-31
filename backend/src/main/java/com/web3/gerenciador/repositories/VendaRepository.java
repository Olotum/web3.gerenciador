package com.web3.gerenciador.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.web3.gerenciador.entities.Venda;

public interface VendaRepository extends JpaRepository<Venda, Long> {

    Page<Venda> findByDateBetweenOrderByValorDesc(LocalDate min, LocalDate max, Pageable pageable);

}

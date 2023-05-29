package com.web3.gerenciador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web3.gerenciador.entities.Venda;
import com.web3.gerenciador.repositories.VendaRepository;

@Service
public class VendaService {

	@Autowired

	private VendaRepository repository;

	public List<Venda> findVendas() {
		return repository.findAll();

}
}

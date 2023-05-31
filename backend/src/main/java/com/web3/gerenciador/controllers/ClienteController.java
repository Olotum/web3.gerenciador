package com.web3.gerenciador.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web3.gerenciador.entities.Cliente;
import com.web3.gerenciador.repositories.ClienteRepository;
import com.web3.gerenciador.services.ClienteService;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	@GetMapping
	public Page<Cliente> findCliente(
			@RequestParam(value="minCompras", defaultValue = "0") Long minCompras, 
			@RequestParam(value="maxCompras", defaultValue = "1000") Long maxCompras, 
			Pageable pageable) {
		return service.findCliente(minCompras, maxCompras, pageable);
	}
	
	@Autowired
	private ClienteRepository clienteRepository;

	public void calcularNumeroCompras(Cliente cliente) {
	    Long numeroCompras = clienteRepository.countCompras(cliente);
	    cliente.setNumero_compras(numeroCompras);
	}
}






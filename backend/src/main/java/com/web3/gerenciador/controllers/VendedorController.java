package com.web3.gerenciador.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web3.gerenciador.entities.Vendedor;
import com.web3.gerenciador.services.VendedorService;

@RestController
@RequestMapping(value = "/vendedor")
public class VendedorController {

	@Autowired
	private VendedorService service;
	
	@GetMapping
	public Page<Vendedor> findVendedor(
			@RequestParam(value="minVendido", defaultValue = "0") Double minVendido, 
			@RequestParam(value="maxVendido", defaultValue = "20000") Double maxVendido, 
			Pageable pageable) {
		return service.findVendedor(minVendido, maxVendido, pageable);
	}
}





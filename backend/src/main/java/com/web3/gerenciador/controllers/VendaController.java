package com.web3.gerenciador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web3.gerenciador.entities.Venda;
import com.web3.gerenciador.services.VendaService;

@RestController
@RequestMapping(value = "/Vendas")
public class VendaController {
	@Autowired
	private VendaService service;
	@GetMapping
	public List<Venda> findVendas() {
		return service.findVendas();
	}

}

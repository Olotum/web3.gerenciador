package com.web3.gerenciador.services;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.web3.gerenciador.entities.Cliente;
import com.web3.gerenciador.repositories.ClienteRepository;

@Service
public class ClienteService {

	@Autowired

	private ClienteRepository repository;

	public Page<Cliente> findCliente(Long minCompras, Long maxCompras, Pageable pageable) {
		
		Long min = minCompras;
		Long max = maxCompras;
		return repository.findCliente(min, max, pageable);

}
}

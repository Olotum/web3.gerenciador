package com.web3.gerenciador.services;




import java.util.NoSuchElementException;

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
	
	@Autowired
	private ClienteRepository clienteRepository;

	public void calcularNumeroCompras(Cliente cliente) {
	    Long numeroCompras = clienteRepository.countCompras(cliente);
	    cliente.setNumero_compras(numeroCompras);
	}
	
	public Cliente findById(Long id) {
        return clienteRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Cliente não encontrado com o ID: " + id));
    }
	
}

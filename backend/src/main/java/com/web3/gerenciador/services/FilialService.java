package com.web3.gerenciador.services;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.web3.gerenciador.entities.Filial;
import com.web3.gerenciador.repositories.FilialRepository;

@Service
public class FilialService {

	@Autowired

	private FilialRepository repository;

	public Page<Filial> findFilial(Double minVendido, Double maxVendido, Pageable pageable) {
		
		Double min = minVendido;
		Double max = maxVendido;
		return repository.findFilial(min, max, pageable);

}
}

package com.web3.gerenciador.services;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;


import com.web3.gerenciador.entities.Vendedor;
import com.web3.gerenciador.repositories.VendedorRepository;

@Service
public class VendedorService {

	@Autowired

	private VendedorRepository repository;

	public Page<Vendedor> findVendedor(Double minVendido, Double maxVendido, Pageable pageable) {
		
		Double min = minVendido;
		Double max = maxVendido;
		return repository.findVendedor(min, max, pageable);
		
		

}
	private CrudRepository<Vendedor, Long> vendedorRepository;

    public Vendedor findById(Long id) {
        return vendedorRepository.findById(id).orElse(null);
    }


}

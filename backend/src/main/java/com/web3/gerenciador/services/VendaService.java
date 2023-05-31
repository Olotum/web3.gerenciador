package com.web3.gerenciador.services;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.web3.gerenciador.entities.Cliente;
import com.web3.gerenciador.entities.Venda;
import com.web3.gerenciador.entities.Vendedor;
import com.web3.gerenciador.repositories.VendaRepository;

@Service
public class VendaService {

    private final VendaRepository vendaRepository;
    private final ClienteService clienteService;
    private final VendedorService vendedorService;

    public VendaService(VendaRepository vendaRepository, ClienteService clienteService, VendedorService vendedorService) {
        this.vendaRepository = vendaRepository;
        this.clienteService = clienteService;
        this.vendedorService = vendedorService;
    }

    public Page<Venda> findVendas(String minDate, String maxDate, Pageable pageable) {
        LocalDate today = LocalDate.now();

        LocalDate min = minDate.isEmpty() ? today.minusDays(365) : LocalDate.parse(minDate);
        LocalDate max = maxDate.isEmpty() ? today : LocalDate.parse(maxDate);
        
        return vendaRepository.findByDateBetweenOrderByValorDesc(min, max, pageable);
    }

    @Transactional
    public Venda criarVenda(Long vendaCliente, String vendaData, Double vendaVal, Long vendaVende) {
        LocalDate today = LocalDate.now();
        Long cliente = vendaCliente;
        LocalDate date = (vendaData == null || vendaData.isEmpty()) ? today : LocalDate.parse(vendaData);
        Double val = vendaVal;
        Long vende = vendaVende;

        // Buscar o objeto Cliente e Vendedor usando os IDs
        Cliente clienteObj = clienteService.findById(cliente);
        Vendedor vendedorObj = vendedorService.findById(vende);

        // Criar a nova instância de Venda com os objetos corretos
        Venda venda = new Venda(clienteObj, date, val, vendedorObj);

        return vendaRepository.save(venda);
    }
    
    @Transactional
    public Venda saveVenda(Venda venda) {
        return vendaRepository.save(venda);
    }


}


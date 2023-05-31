package com.web3.gerenciador.entities;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name = "tb_cliente")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Long numero_compras;
    private Double valor_total;
    private Long telefone;
        
    
    public Cliente() {
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public Long getNumero_compras() {
        return numero_compras;
    }
    
    public void setNumero_compras(Long numero_compras) {
        this.numero_compras = numero_compras;
    }
    
    public Double getValor_total() {
        return valor_total;
    }
    
    public void setValor_total(Double valor_total) {
        this.valor_total = valor_total;
    }
    
    public Long getTelefone() {
        return telefone;
    }
    
    public void setTelefone(Long telefone) {
        this.telefone = telefone;
    }
    
}


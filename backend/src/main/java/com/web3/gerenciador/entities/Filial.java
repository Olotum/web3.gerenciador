package com.web3.gerenciador.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "tb_filial")
public class Filial {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String endereço;
	private Long numero_vendedores;
	private Double total_vendido;
	private Long telefone;
	
	public Filial() {
		
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

	public String getEndereço() {
		return endereço;
	}

	public void setEndereço(String endereço) {
		this.endereço = endereço;
	}

	public Long getNumero_vendedores() {
		return numero_vendedores;
	}

	public void setNumero_vendedores(Long numero_vendedores) {
		this.numero_vendedores = numero_vendedores;
	}

	public Double getTotal_vendido() {
		return total_vendido;
	}

	public void setTotal_vendido(Double total_vendido) {
		this.total_vendido = total_vendido;
	}

	public Long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}
	
	


}

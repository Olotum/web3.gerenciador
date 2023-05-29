import React from 'react';
import './styles.css'

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
}

const PasswordInput = ({ label, value, onChange, onSubmit, placeholder }: PasswordInputProps) => {
  return (
    <div className="card">
    <form onSubmit={onSubmit}>
      <tr>
        <label>{label}</label>
        <input type="password" value={value} onChange={onChange} placeholder={placeholder || "Digite a senha..."} />
      </tr>
      <tr>
      <button type="submit">Entrar</button>
      </tr>
    </form>
    </div>
  );
};

export default PasswordInput;

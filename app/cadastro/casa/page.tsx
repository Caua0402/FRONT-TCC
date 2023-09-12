"use client"

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';

interface IUserData {
  typeUser: "client",
  nameUser?: string,
  biography?: string,
  email?: string,
  password?: string,
  idGender?: number,
  cpf?: string,
  phone?: string,
  ddd?: string,
  address?: IUserHomeData
}

interface IUserHomeData {
  typeHouse?: string,
  state?: number,
  city?: string,
  cep?: string,
  publicPlace?: string,
  complement?: string,
  district?: string,
  houseNumber?: string
}

export default function CadastroCliente() {

  const createAdressSchema = z.object({
    tipo_residencia: z.number().min(1).max(1),
    estado: z.string().nonempty("* Este campo é obrigatório"), //esse parametro é na verdade um select e pede um numero
    cidade: z.string().nonempty("* Este campo é obrigatório"),
    cep: z.string().min(8).max(8),
    logradouro: z.string().nonempty("* Este campo é obrigatório"),
    complemento: z.string(),
    bairro: z.string().nonempty("* Este campo é obrigatório"),
    numero: z.string().nonempty("* Este campo é obrigatório")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAdressFormData>({
    resolver: zodResolver(createAdressSchema),
  })


  function createUser(data: any) {
    alert('entrei')
    // console.log(data);
    // localStorage.setItem('meusDados', JSON.stringify(data));

  }

  type CreateAdressFormData = z.infer<typeof createAdressSchema>




  return (
    <>
      <form className='w-1/4' onSubmit={handleSubmit(createUser)}>
        <div className='flex flex-col'>
          <label htmlFor="tipo_residencia">TIPO DE RESIDÊNCIA</label>
          <select id="tipo_residencia" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            {...register('tipo_residencia')}>
            <option selected value="1">Apartamento</option>
            <option value="2">Casa</option>
            <option value="3">Loft</option>
            <option value="4">Chacara</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="nome">CEP</label>
          <input
            maxLength={8}
            type="text"
            id="cep"
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            {...register("cep")}
          />
          {errors.cep ? <span>{errors.cep?.message}</span> : null}
        </div>
        <div className='flex flex-col'>
          <label htmlFor="nome">ESTADO</label>
          <input
          disabled
            type="text"
            id="estado"
            className='mt-1 px-3 py-2 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            {...register("estado")}
          />
          {errors.estado ? <span>{errors.estado?.message}</span> : null}
        </div>
        <div className='flex flex-col'>
          <label htmlFor="nome">CIDADE</label>
          <input
          disabled
            id="cidade"
            className='mt-1 px-3 py-2 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            {...register("cidade")}
          />
          {errors.cidade ? <span>{errors.cidade?.message}</span> : null}
        </div>
        
        <div className='flex flex-col'>
          <label htmlFor="nome">BAIRRO</label>
          <input
            disabled
            id="bairro"
            className='mt-1 px-3 py-2 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            {...register("bairro")}
          />
          {errors.bairro ? <span>{errors.bairro?.message}</span> : null}
        </div>
        <div className='flex flex-col'>
          <label htmlFor="nome">NÚMERO</label>
          <input
            id="numero"
            className='mt-1 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            {...register("numero")}
          />
          {errors.numero ? <span>{errors.numero?.message}</span> : null}
        </div>
        <div className='flex flex-col'>
          <label htmlFor="nome">COMPLEMENTO</label>
          <input
            id="complemento"
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            {...register("complemento")}
          />
          {errors.complemento ? <span>{errors.complemento?.message}</span> : null}
        </div>
        <input type="submit" />
      </form>
    </>
  );
}
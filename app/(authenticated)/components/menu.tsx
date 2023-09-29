"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  
  return (
    <div className={`bg-blue-700 text-white h-full w-64 lg:w-1/5`}>
      <div className={`text-blue-700 p-6 flex flex-col border-r h-full border-slate-300 bg-slate-50 `}>
        <Link
          href="/dashboard/home"
          className='flex gap-2'
        >
          <Image
            src="/assets/dash/iconeCasa.svg"
            alt="Logo"
            width={20}
            height={20}
          />
          <span className='border-b hover:border-blue-00 border-transparent'>
            Casa
          </span>
        </Link>
        <Link
          href="/dashboard/aberta"
          className='flex gap-2'
        >
          <Image
            src="/assets/dash/iconeDash.svg"
            alt="Logo"
            width={20}
            height={20}
          />
          <span className='border-b hover:border-blue-00 border-transparent'>
            Solicitação aberta
          </span>
        </Link>
        <Link
          href="/dashboard/perfil"
          className='flex gap-2'
        >
          <Image
            src="/assets/dash/iconeDash.svg"
            alt="Logo"
            width={20}
            height={20}
          />
          <span className='border-b hover:border-blue-00 border-transparent'>
            Perfil
          </span>
        </Link>
      </div>
    </div>
  );
}

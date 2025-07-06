import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  sector: string;
  openJobs: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './dashboard.html',
  standalone: true,
  styleUrl: './dashboard.css'
})
export class Dashboard {

  partners: Partner[] = [
    {
      id: '1',
      name: 'Cognizant',
      logoUrl: 'Cog.jpeg',
      sector: 'Tecnologia',
      openJobs: 5,
    },
    {
      id: '2',
      name: 'Einstein',
      logoUrl: 'eistein.jpeg',
      sector: 'Comércio',
      openJobs: 3,
    },
    {
      id: '3',
      name: 'CIEE',
      logoUrl: 'CIEE.jpeg',
      sector: 'Trabalho',
      openJobs: 3,
    },
    {
      id: '4',
      name: 'Alura',
      logoUrl: 'alura.jpeg',
      sector: 'Aprendizado',
      openJobs: 7,
    },
    // ... outros parceiros
  ];

}

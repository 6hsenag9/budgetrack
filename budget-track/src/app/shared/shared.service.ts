import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  getCategories(): Categories[]{
    return [
      {
          "categoryName": "Miscellaneous",
          "id": "clhk3tfyc2wxb0ble09qsuu4t"
      },
      {
          "categoryName": "Groceries",
          "id": "clhk3w39i33560blfyiy78fx0"
      },
      {
          "categoryName": "Shopping",
          "id": "clhk3whcx335l0blfm0s6sus1"
      },
      {
          "categoryName": "College Fee",
          "id": "clhk3wwnz2wz60ble1lr0ze9x"
      },
      {
          "categoryName": "Transportation",
          "id": "clhk4hhb7357q0alh7nupz09y"
      },
      {
          "categoryName": "Other",
          "id": "clhk4hvpb33he0blfi6uv8edm"
      },
      {
          "categoryName": "Insurance",
          "id": "clhk4ibrj2x990blegx7zvahv"
      },
      {
          "categoryName": "Recreational and Entertainment",
          "id": "clhk4iqq9358k0alho5rcwubn"
      },
      {
          "categoryName": "Utilities",
          "id": "clhk4j50t35a30alhduos09qv"
      },
      {
          "categoryName": "Bills",
          "id": "clhk4jg2c2xbz0bleecw26zjd"
      },
      {
          "categoryName": "Housing",
          "id": "clhk4jrwy33kn0blfwr7o7tqy"
      },
      {
          "categoryName": "Learning and Development",
          "id": "clhk4k7xk2xcc0blevqbocnml"
      },
      {
          "categoryName": "Medical and Healthcare",
          "id": "clhk4km2335bt0alhq23p7x3m"
      },
      {
          "categoryName": "Food",
          "id": "clhk4kx6u35c00alhsc7zu5gn"
      },
      {
          "categoryName": "Fuel",
          "id": "clj3r2jv509p20bli3oyx1s6h"
      },
      {
          "categoryName": "Rentals",
          "id": "clj3r2pv909nu0bleumnuy5zu"
      },
      {
          "categoryName": "Communication and Internet",
          "id": "cljudm1iq0vw50ak69znexzca"
      }
  ];
  }
}

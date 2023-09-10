import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { MonthlyTransactions } from './transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionservService {

  constructor() { }
  getTransactions(): Transaction[]{
    return [
      {
          "amount": 1.2,
          "createdAt": "2023-07-24T16:52:38.189424+00:00",
          "categoryName": {
              "categoryName": "Other"
          },
          "financeName": "sdf",
          "id": "clkh3w6ny640c0aljba6maz8e",
          "isIncome": true
      },
      {
          "amount": 32,
          "createdAt": "2023-07-24T02:04:40.004254+00:00",
          "categoryName": {
              "categoryName": "Other"
          },
          "financeName": "louda tax",
          "id": "clkg868y35ke50bk1n8rq0tju",
          "isIncome": false
      },
      {
          "amount": 32,
          "createdAt": "2023-07-24T01:48:28.833281+00:00",
          "categoryName": {
              "categoryName": "Shopping"
          },
          "financeName": "dsf",
          "id": "clkg7lfli5lgo0blj40wu0q6d",
          "isIncome": false
      },
      {
          "amount": 45,
          "createdAt": "2023-07-20T18:00:09.137954+00:00",
          "categoryName": {
              "categoryName": "Other"
          },
          "financeName": "mfhmgf",
          "id": "clkbgjlpy2hl90bk1bijdjo3e",
          "isIncome": true
      },
      {
          "amount": 456,
          "createdAt": "2023-07-20T17:59:56.034897+00:00",
          "categoryName": {
              "categoryName": "Shopping"
          },
          "financeName": "5tue5jh",
          "id": "clkbgjbly2hkz0blja85bjrc0",
          "isIncome": false
      },
      {
          "amount": 1234,
          "createdAt": "2023-07-20T17:58:42.811485+00:00",
          "categoryName": {
              "categoryName": "Other"
          },
          "financeName": "walgreen",
          "id": "clkbghr462hk50bk1ni6dgoxw",
          "isIncome": true
      },
      {
          "amount": 23.78,
          "createdAt": "2023-07-20T17:57:54.483832+00:00",
          "categoryName": {
              "categoryName": "Utilities"
          },
          "financeName": "Wifi 6",
          "id": "clkbggpun2hip0bk1eafk2fie",
          "isIncome": false
      },
      {
          "amount": 134,
          "createdAt": "2023-07-19T18:55:20.576126+00:00",
          "categoryName": {
              "categoryName": "Other"
          },
          "financeName": "asdf gasd",
          "id": "clka32q6e0u850alj5e75os4d",
          "isIncome": true
      },
      {
          "amount": 234,
          "createdAt": "2023-07-19T08:10:36.191019+00:00",
          "categoryName": {
              "categoryName": "Other"
          },
          "financeName": "Test 197",
          "id": "clk9g1l4i1fkt0bk1ax4bui4t",
          "isIncome": true
      }
    ];
  }

  getMonthWiseTransactions():MonthlyTransactions[]{
    return[
          {
              "amount": 11,
              "createdAt": "2023-07-26T01:48:39.993918+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "fsaf",
              "financeName": "ada",
              "id": "clkj2hdj30peb0aldlbw4cpny"
          },
          {
              "amount": 65,
              "createdAt": "2023-07-26T01:19:42.765016+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "hjbuf iu ",
              "financeName": "test income 14",
              "id": "clkj1g52p0och0blbuzdh0h8p"
          },
          {
              "amount": 111,
              "createdAt": "2023-07-26T01:16:34.059992+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "College Fee",
                  "id": "clhk3wwnz2wz60ble1lr0ze9x"
              },
              "description": "www",
              "financeName": "ww111",
              "id": "clkj1c3gz0nq90aliqcnzbmw1"
          },
          {
              "amount": 21,
              "createdAt": "2023-07-26T01:15:19.486002+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "bhj hh ",
              "financeName": "Joty",
              "id": "clkj1ahxg0oav0blbgn37pfu9"
          },
          {
              "amount": 12,
              "createdAt": "2023-07-26T01:14:36.837757+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "iunin",
              "financeName": "uiniun",
              "id": "clkj19l0p0p1o0aldghkk7koc"
          },
          {
              "amount": 11,
              "createdAt": "2023-07-26T01:13:22.902449+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "nn",
              "financeName": "data 1",
              "id": "clkj17zyy0p170ald6p8y56c4"
          },
          {
              "amount": 12,
              "createdAt": "2023-07-26T01:12:10.343821+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Miscellaneous",
                  "id": "clhk3tfyc2wxb0ble09qsuu4t"
              },
              "description": "jheje",
              "financeName": "Dta",
              "id": "clkj16fzj0noo0alin358emn5"
          },
          {
              "amount": 1,
              "createdAt": "2023-07-25T20:56:56.923977+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Transportation",
                  "id": "clhk4hhb7357q0alh7nupz09y"
              },
              "description": "dx",
              "financeName": "we",
              "id": "clkis282o0jmv0ald0whhim7q"
          },
          {
              "amount": 13,
              "createdAt": "2023-07-25T20:55:17.085003+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "geg",
              "financeName": "Test 13",
              "id": "clkis031b0iyg0ck4hqaptzun"
          },
          {
              "amount": 23,
              "createdAt": "2023-07-25T20:53:06.758843+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Shopping",
                  "id": "clhk3whcx335l0blfm0s6sus1"
              },
              "description": "shopping",
              "financeName": "Test 11",
              "id": "clkirxaha0iqt0aligtttvm1u"
          },
          {
              "amount": 300,
              "createdAt": "2023-07-25T20:37:10.105989+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "wweff",
              "financeName": "TEst 12",
              "id": "clkircsbl0ifc0ali8nvak6ws"
          },
          {
              "amount": 23,
              "createdAt": "2023-07-25T20:35:16.903789+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Groceries",
                  "id": "clhk3w39i33560blfyiy78fx0"
              },
              "description": "sc",
              "financeName": "TEst",
              "id": "clkiracz90ie80alia924liaa"
          },
          {
              "amount": 1.2,
              "createdAt": "2023-07-24T16:52:38.189424+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "yubyuin",
              "financeName": "sdf",
              "id": "clkh3w6ny640c0aljba6maz8e"
          },
          {
              "amount": 32,
              "createdAt": "2023-07-24T02:04:40.004254+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "louda tax",
              "financeName": "louda tax",
              "id": "clkg868y35ke50bk1n8rq0tju"
          },
          {
              "amount": 32,
              "createdAt": "2023-07-24T01:48:28.833281+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Shopping",
                  "id": "clhk3whcx335l0blfm0s6sus1"
              },
              "description": "sdf",
              "financeName": "dsf",
              "id": "clkg7lfli5lgo0blj40wu0q6d"
          },
          {
              "amount": 1234,
              "createdAt": "2023-07-20T17:58:42.811485+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "gdsfb",
              "financeName": "walgreen",
              "id": "clkbghr462hk50bk1ni6dgoxw"
          },
          {
              "amount": 23.78,
              "createdAt": "2023-07-20T17:57:54.483832+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Utilities",
                  "id": "clhk4j50t35a30alhduos09qv"
              },
              "description": "trshstdrh",
              "financeName": "Wifi 6",
              "id": "clkbggpun2hip0bk1eafk2fie"
          },
          {
              "amount": 134,
              "createdAt": "2023-07-19T18:55:20.576126+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "sdf",
              "financeName": "asdf gasd",
              "id": "clka32q6e0u850alj5e75os4d"
          },
          {
              "amount": 234,
              "createdAt": "2023-07-19T08:10:36.191019+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "jifnif",
              "financeName": "Test 197",
              "id": "clk9g1l4i1fkt0bk1ax4bui4t"
          },
          {
              "amount": 123,
              "createdAt": "2023-07-19T07:11:21.799949+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Shopping",
                  "id": "clhk3whcx335l0blfm0s6sus1"
              },
              "description": "eion",
              "financeName": "New Text july 18",
              "id": "clk9dxejg1eyr0bk2uenot1xh"
          },
          {
              "amount": 45,
              "createdAt": "2023-07-20T18:00:09.137954+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "ngvbmn",
              "financeName": "mfhmgf",
              "id": "clkbgjlpy2hl90bk1bijdjo3e"
          },
          {
              "amount": 456,
              "createdAt": "2023-07-20T17:59:56.034897+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Shopping",
                  "id": "clhk3whcx335l0blfm0s6sus1"
              },
              "description": "jucgftjyn",
              "financeName": "5tue5jh",
              "id": "clkbgjbly2hkz0blja85bjrc0"
          },
          {
              "amount": 23.98,
              "createdAt": "2023-07-09T18:28:46.544583+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Recreational and Entertainment",
                  "id": "clhk4iqq9358k0alho5rcwubn"
              },
              "description": "Ttfjihg, and yfyhryu4y",
              "financeName": "Model yfdvhvhh htt untrue ",
              "id": "cljvrq1jr1a4p0ak6eeby8n22"
          },
          {
              "amount": 32,
              "createdAt": "2023-07-25T21:02:14.1603+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Transportation",
                  "id": "clhk4hhb7357q0alh7nupz09y"
              },
              "description": "rgedv",
              "financeName": "sdvsd",
              "id": "clkis90uw0j2v0alih1axmbaq"
          },
          {
              "amount": 45,
              "createdAt": "2023-07-10T04:05:29.904875+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "j",
              "financeName": "j n",
              "id": "cljwcbpof1hlc0blivxbgvyec"
          },
          {
              "amount": 56.96,
              "createdAt": "2023-07-09T18:30:44.529172+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Insurance",
                  "id": "clhk4ibrj2x990blegx7zvahv"
              },
              "description": "Grdg yyhh",
              "financeName": "Health insurance ",
              "id": "cljvrskl51ao30blirq3vfwto"
          },
          {
              "amount": 5.44,
              "createdAt": "2023-07-09T18:30:02.106606+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Recreational and Entertainment",
                  "id": "clhk4iqq9358k0alho5rcwubn"
              },
              "description": "Rfgh",
              "financeName": "Transformers ",
              "id": "cljvrrnvr1a6t09inapdz214g"
          },
          {
              "amount": 584,
              "createdAt": "2023-07-09T18:29:33.98748+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "Ffcg",
              "financeName": "Tfyyhvv",
              "id": "cljvrr25l1a6h09in3f2235rl"
          },
          {
              "amount": 255,
              "createdAt": "2023-07-09T18:29:16.971257+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Transportation",
                  "id": "clhk4hhb7357q0alh7nupz09y"
              },
              "description": "Fgg",
              "financeName": "Futfxgg gh hb g hgff",
              "id": "cljvrqp0x1a5g0blg5txw2uf9"
          },
          {
              "amount": 25.65,
              "createdAt": "2023-07-09T18:22:16.718968+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "Tdf",
              "financeName": "Surapaneni Sai Shanmukkha",
              "id": "cljvrhort1a4a09inxizl6r7q"
          },
          {
              "amount": 343,
              "createdAt": "2023-07-08T19:06:46.974431+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Communication and Internet",
                  "id": "cljudm1iq0vw50ak69znexzca"
              },
              "description": "333jkbetb vrg",
              "financeName": "Mobile Bill",
              "id": "cljudn2gx0w6h0blgbef2km5t"
          },
          {
              "amount": 94,
              "createdAt": "2023-07-07T20:48:21.774214+00:00",
              "isIncome": true,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "Jwheb",
              "financeName": "Hehej",
              "id": "cljt1tukx0iqv0blidvfx49q0"
          },
          {
              "amount": 123,
              "createdAt": "2023-07-07T20:48:07.212241+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Other",
                  "id": "clhk4hvpb33he0blfi6uv8edm"
              },
              "description": "Bsbs",
              "financeName": "Smart style",
              "id": "cljt1tjd10j4y09invyfyodz0"
          },
          {
              "amount": 145,
              "createdAt": "2023-07-07T20:47:49.419551+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "College Fee",
                  "id": "clhk3wwnz2wz60ble1lr0ze9x"
              },
              "description": "Bshs",
              "financeName": "Model",
              "id": "cljt1t5m70iqf0blg1btjqunp"
          },
          {
              "amount": 23,
              "createdAt": "2023-07-07T03:36:14.874787+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "Shopping",
                  "id": "clhk3whcx335l0blfm0s6sus1"
              },
              "description": "3",
              "financeName": "djkd",
              "id": "cljs0yjhy0g5v0bliasb3xcma"
          },
          {
              "amount": 12,
              "createdAt": "2023-07-06T06:03:22.414396+00:00",
              "isIncome": false,
              "categoryName": {
                  "categoryName": "College Fee",
                  "id": "clhk3wwnz2wz60ble1lr0ze9x"
              },
              "description": "s",
              "financeName": "NIce",
              "id": "cljqqrw71347c0bk7u1c12621"
          }
      ]
  }
}

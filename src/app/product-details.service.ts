import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductDetailsService {
  data = [
    {
      item: "Mangoes",
      type: "fruit",
      url:
        "https://www.timeoutdubai.com/sites/default/files/tod/styles/full_img/public/images/2019/07/16/Mangoes.jpg?itok=9XrMJrfI",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "6 nos",
          volume: "230 * 200 * 100"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "9 nos",
          volume: "300 * 230 * 100"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "12 nos",
          volume: "330 * 250 * 100"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "15 nos",
          volume: "390 * 240 * 100"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "18 nos",
          volume: "475 * 250 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    },
    {
      item: "Pomegranates",
      type: "fruit",
      url:
        "https://www.readersdigest.ca/wp-content/uploads/sites/14/2016/05/pom.jpg",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "3.5 Kg",
          volume: "400 * 240 * 105"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "5 Kg",
          volume: "380 * 400 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    },
    {
      item: "Papaya",
      type: "fruit",
      url:
        "https://cdn.shopify.com/s/files/1/0535/4461/products/IMG_3717_1500x.JPG?v=1540509924",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "3.5 Kg",
          volume: "400 * 240 * 105"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "5 Kg",
          volume: "380 * 400 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    },
    {
      item: "Grapes",
      type: "fruit",
      url:
        "https://static01.nyt.com/images/2016/08/17/dining/17BURNER-GRAPES-WEB3/17BURNER-GRAPES-WEB1-jumbo.jpg?quality=90&auto=webp",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "3.5 Kg",
          volume: "400 * 240 * 105"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "5 Kg",
          volume: "380 * 400 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    },
    {
      item: "Okra",
      type: "vegetable",
      url:
        "https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/10/iStock-520883902.jpg?fit=2120%2C1415&ssl=1",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "3.5 Kg",
          volume: "400 * 240 * 105"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "5 Kg",
          volume: "380 * 400 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    },
    {
      item: "Bell pepper",
      type: "vegetable",
      url:
        "http://naturallynourishing.com/wp-content/uploads/2013/06/Bell-Peppers.jpg",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "3.5 Kg",
          volume: "400 * 240 * 105"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "5 Kg",
          volume: "380 * 400 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    },
    {
      item: "Beans",
      type: "vegetable",
      url:
        "https://www.seriouseats.com/images/2016/07/20160707-legumes-red-kidney-beans-vicky-wasik-4.jpg",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "3.5 Kg",
          volume: "400 * 240 * 105"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "5 Kg",
          volume: "380 * 400 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    },
    {
      item: "Ginger",
      type: "vegetable",
      url: "https://static.toiimg.com/photo/68048584.cms",
      packagingTypes: [
        {
          label: "Corrugated Fibreboard Box",
          capacity: "3.5 Kg",
          volume: "400 * 240 * 105"
        },
        {
          label: "Corrugated Fibreboard Box",
          capacity: "5 Kg",
          volume: "380 * 400 * 100"
        }
      ],
      info: [
        "* Outer ply of white duplex board of bleached kraft",
        "** Or any other suitable style which provides equal strength and performance",
        "*** Outer ply to be laminated or coated for water proofing"
      ],
      notes: [
        "Dimensions of the box are modular to Euro pallets. However, nay other dimensions or box styles to suit importers requirements could also be used",
        "Grammage mentioned is indicative. However, any other grammage which provider equal strength and performance can be used.",
        "Diameter and no. of holes should be 20mm and 16 nos. respectively. However, sufficient  venilation depending upon the box style could also be used."
      ]
    }
  ];
  constructor() {}
}

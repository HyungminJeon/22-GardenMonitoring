const plants = [
  {
    id: 1,
    name: 'Succulent',
    type: 'Echeveria',
    imageSrc: 'http://localhost:9000/images/plant1.avif',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    state: "success",
    soil: 'Moderately acid (5.6 – 6.0) Slightly acid (6.1 – 6.5) Neutral (6.6 – 7.3) Slightly alkaline (7.4 – 7.8)',
    minColdHard: 'Zone 9b -3.9 °C (25 °F) to -1.1 °C (30 °F)',
    leaves: 'Unusual foliage color, Evergreen',
    sun: 'Partial or Dappled Shade',
    flowers: 'Showy',
    flowerColor: 'Other: Pinkish red',
    bloomSize: 'Under 1"',
    suitableLocations: 'Xeriscapic, Houseplant',
    propMethods: 'Cuttings: Leaf',
    otherMethods: 'Offsets',
    containers: 'Suitable in 1 gallon, Needs excellent drainage in pots',
    link: 'https://garden.org/plants/view/111967/Echeveria-Perle-von-Nurnberg/'
    
  },
  {
    id: 2,
    name: 'Pepppermint',
    type: 'Mentha x piperita',
    imageSrc: 'http://localhost:9000/images/plant2.avif',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    state: "success",
    sun: 'Full Sun to Partial Shade',
   
   
    leaves: 'Unusual foliage color, Fragrant',
    
    flowers: 'Showy, Fragrant',
    
    suitableLocations: 'Bog gardening',
    propMethods: 'Cuttings: Stem',
    otherMethods: 'Division, Stolons and runners',
    containers: 'Suitable in 1 gallon, Suitable in 3 gallon or larger',
    link: 'https://garden.org/plants/view/144515/Peppermint-Mentha-x-piperita/'
    
  },
  {
    id: 3,
    name: 'Rose',
    type: 'Rosa',
    
    imageSrc: 'http://localhost:9000/images/plant3.avif',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    state: "success",
    sun: 'Full Sun',
    
    soil: 'Moderately acid (5.6 – 6.0) Slightly acid (6.1 – 6.5) Neutral (6.6 – 7.3) Slightly alkaline (7.4 – 7.8)',
    leaves: 'Deciduous',
    flowers: 'Showy',
    propMethods: 'Cuttings: Stem',
    otherMethods: 'Cuttings: Tip',
    link: 'https://garden.org/plants/view/181506/Roses-Rosa/'
  },
  {
    id: 4,
    name: 'Prayer Plant',
    type: 'Goeppertia orbifolia',
    imageSrc: 'http://localhost:9000/images/plant4.avif',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    state: "warning",
    sun: 'Partial or Dappled Shade',
    water: 'Mesic',
    soil: 'Moderately acid (5.6 – 6.0) Slightly acid (6.1 – 6.5) Neutral (6.6 – 7.3) Slightly alkaline (7.4 – 7.8)',
    leaves: 'Unusual foliage color, Evergreen, Other: Rounded in shape; upper surface silver and green stripes; lower surface, pale green.',
    flowers: 'Showy',
    suitableLocations: 'Houseplant',
    containers: 'Needs excellent drainage in pots',
    link: 'https://garden.org/plants/view/333848/Prayer-Plant-Goeppertia-orbifolia/'
  },
  {
    id: 5,
    name: 'African Daisy',
    type: 'Gerbera',
    imageSrc: 'http://localhost:9000/images/plant5.avif',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    state: "success",
    sun: 'Full Sun',
    water: 'Mesic, Dry Mesic',
    soil: 'Slightly acid (6.1 – 6.5) Neutral (6.6 – 7.3)',
    leaves: 'Evergreen',
    flowers: 'Showy, Flagrant',
    flowerTime: 'Spring, Late spring or early summer, Summer, Late summer or early fall, Fall',
    propMethods: 'Cuttings: Stem',
    otherMethods: 'Division',
    containers: 'Suitable in 3 gallon or larger, Needs excellent drainage in pots',
    link: 'https://garden.org/plants/view/712791/African-Daisy-Osteospermum-ecklonis-Serenity-Blue-Eyed-Beauty/'
  },
  {
    id: 6,
    name: 'Shasta Daisy',
    type: 'Leucanthemum × superbum',
    imageSrc: 'http://localhost:9000/images/plant6.avif',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    state: "warning",
    sun: 'Full Sun, Full Sun to Partial Shade',
    water: 'Mesic, Dry Mesic',
    flowers: 'Showy',
    flowerColor: 'White',
    bloomSize: '2"-3"',
    flowerTime: 'Spring, Summer, Fall',
    suitableLocations: 'Xeriscapic',
    link: 'https://garden.org/plants/view/530761/Shasta-Daisy-Leucanthemum-x-superbum-Daisy-May/'
  },
  {
    id: 7,
    name: 'Peace Lily',
    type: 'Herb',
    sun: 'Partial or Dappled Shade',
    soil: 'Slightly acid (6.1 – 6.5) Neutral (6.6 – 7.3)',
    minColdHard: 'Zone 13 +15.6 °C (60 °F) to +21.1 °C (70 °F)',
    leaves: 'Evergreen',
    flowers: 'Showy',
    flowerColor: 'White, Other: Creamy white spathe, pale yellow spadix.',
    suitableLocations: 'Houseplant',
    propMethods: 'Division',
    
    imageSrc: 'http://localhost:9000/images/plant7.avif',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    state: "error",
    
    water: 'Mesic',
    containers: 'Needs excellent drainage in pots',
    link: 'https://garden.org/plants/view/119743/Peace-Lily-Spathiphyllum-cannifolium/'
    
  },
  {
    id: 8,
    name: 'Southern Maidenhair Fern',
    type: 'Adiantum capillus-veneris',
    imageSrc: 'http://localhost:9000/images/plant8.avif',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    state: "success",
    sun: 'Partial or Dappled Shade, Partial Shade to Full Shade',
    water: 'Mesic',
    minColdHard: 'Zone 5b -26.1 °C (-15 °F) to -23.3 °C (-10 °F)',
    leaves: 'Deciduous',
    suitableLocations: 'Terrariums, Bog gardening',
    propMethods: 'Division',
    containers: 'Suitable for hanging baskets, Needs excellent drainage in pots',
    link: 'https://garden.org/plants/view/75129/Southern-Maidenhair-Fern-Adiantum-capillus-veneris/'
  },
];

export default plants;
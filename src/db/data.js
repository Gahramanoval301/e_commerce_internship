const data = [
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/women_tara_wedge_pump/women;s_tara_wedge_pump.jpg",
            back: "/shoes/women_tara_wedge_pump/women;s_tara_wedge_pump_back.jpg",
            bottom: "/shoes/women_tara_wedge_pump/women;s_tara_wedge_pump_bottom.jpg"
        },
        title: "women's tara wedge pump",
        star: "5",
        price: "$43.70",
        color: "black",
        category: "heels",
        use: "women",
        about: {
            first: 'Cushioned footbed',
            second: 'Flexible and lightweight sole',
            third: 'wedge',
            fourth:'Heel Height: 2.25 inches'
        },
        manufacturer: 'AK Anne Klein Sport',
        dataFirstAvaliable: 'July 20, 2018',
        material:'man made'
    },
    {
        images: {
            normal: "/shoes/loafer_flat/loafer_flat.jpg",
            bottom: "/shoes/loafer_flat/loafer_flat_bottom.jpg",
        },
        title: "women's loafer flat",
        star: "4",
        price: "$22.80",
        color: "pink",
        category: "flats",
        use: "women",
        about: {
            first: 'COMFORT AND FIT: These super-soft unstructured loafer flats have a padded insole with high-quality memory foam for added comfort and a heel pillow to relieve pressure and heel slip. Available in regular and wide-widths. Pointed toe shoes can fit narrow on wide feet, if in between sizes order up.',
            second: 'MATERIAL: Amazon Essentials shoes are made from high-quality alternative leather materials. This style has a faux calfskin upper and is fully lined in faux suede.',
            third: 'STYLE: These flat loafers have a soft pointed toe, moc seam detail, and a modern upper design.',
            fourth: 'DETAILS: 3/8 inch heel with a flexible non-slip sole.',
            fifth:"DESIGN: These loafer flats take you from day to night and can be paired with your favorite Amazon Essentials outfit.",
        },
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'April 28, 2021',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "",
            front: "/shoes/crestwood_waterproof_hiking_shoe/crestwood_waterproof_hiking_shoe_front.jpg",
            back: "/shoes/crestwood_waterproof_hiking_shoe/crestwood_waterproof_hiking_shoe_back.jpg",
            bottom:"/shoes/crestwood_waterproof_hiking_shoe/crestwood_waterproof_hiking_shoe_bottom.jpg"
        },
        title: "Men's Crestwood Waterproof Hiking Shoe",
        star: "5",
        price: "$79.70",
        color: "brown",
        category: "sneakers",
        use: "men",
        about: {
            first: "OMNI-TECH: Our proprietary technology provides air-permeable protection that's waterproof and breathable, keeping mother nature's elements out, at the same time allowing the inside to breathe, keeping your feet dry and comfortable no matter the conditions",
            second: "DURABLE HIKING SHOE: The perfect combination of high function and performance designed into these classic Columbia trail shoes — an all-purpose hiker that will deliver years of comfort",
            third: 'WATERPROOF PERFORMANCE: Designed from a leather, mesh, and reinforced webbing upper, these waterproof shoes are ready for trekking in the elements',
            fourth: "ALL-DAY SUPPORT: Our TechLite lightweight midsole provides lasting comfort, superior cushioning and high energy return for all-day comfort",
            fifth:"ALL TERRAIN TRACTION: Our signature Omni-Grip non-marking traction rubber outsole provides high grip across a wide variety of terrain"
        },
        manufacturer: 'Columbia',
        dataFirstAvaliable: 'October 31, 2022',
        material:'rubber'
    },
    {
        images: {
            normal: "/shoes/608_v5_cross_trainer/608_v5_cross_trainer.jpg",
            front: "/shoes/608_v5_cross_trainer/608_v5_cross_trainer_front.jpg",
            back: "/shoes/608_v5_cross_trainer/608_v5_cross_trainer_back.jpg",
            bottom:"/shoes/608_v5_cross_trainer/608_v5_cross_trainer_bottom.jpg"
        },
        title: "Women's 608 V5 Cross Trainer",
        star: "5",
        price: "$52.70",
        color: "white",
        category: "sneakers",
        use: "women",
        about: {
            first: "PU Foam insert offers long-lasting comfort and support",
            second: "Lightweight injection-molded EVA foam midsole provides lightweight cushioning",
            third: "Phantom Liner interior has minimal seaming to help reduce irritation",
            fourth: "Internal midsole shank adds midfoot structure and support",
            fifth:"NB Soft plus Supportive Comfort Insert offers all-day comfort and support"
        },
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'rubber'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },
    {
        images: {
            normal: "/shoes/men_service_shoe/men's_service_shoe.jpg",
            front: "/shoes/men_service_shoe/men's_service_shoe_front.jpg",
            back: "/shoes/men_service_shoe/men's_service_shoe_back.jpg"
        },
        title: "men's service shoe",
        star: "4",
        price: "$43.70",
        color: "black",
        category: "sneakers",
        use: "men",
        about: `COMFORT AND FIT: These service shoes are certified ASTM F3445 tested for slip resistance and non-skid outsole. The elastic gussets ensure easy entry and a comfortable fit.
MATERIAL: Amazon Essentials shoes are made from high- quality alternative leather materials.This style has a faux leather upper and is lined in breathable mesh fabric.
STYLE: These shoes are designed to perform in various service environments.
DETAILS: slip - resistant outsole for dry, wet, and oily surfaces.`,
        manufacturer: 'Amazon essentials',
        dataFirstAvaliable: 'December 19, 2022',
        material:'synthetic'
    },

];

export default data;

const units = [
    { label: "in", value: "inch" },
    { label: "mm", value: "milimeter" }
]

const boxesDetails = {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "Length",
                value: "length",
                slug: "length"
            },
            {
                label: "Width",
                value: "width",
                slug: "width"
            },
            {
                label: "Height",
                value: "height",
                slug: "height"
            },
        ]
    },
    "Material": {
        id: 2,
        title: "Material",
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "White cardboard",
                des: "Like printing on white canvas",
                value: "White cardboard"
            },
            {
                title: "Silver cardboard",
                des: "Provide metallic effect",
                value: "Silver cardboard"
            },
            {
                title: "Holographic cardboard",
                des: "Provides rainbow metallic effect",
                value: "Holographic cardboard",
            }
        ]
    },
    "Finishes": {
        id: 3,
        title: "Finishes",
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination",
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss",
            }
        ]
    },
    "Extra Finishes": {
        id: 4,
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra_finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil",
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing",
            }
        ]
    },
    "Quantity": {
        type: 3,
        title: "Quantity",
        id: 5,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const mylarDetails = {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        id: 1,
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "length",
                value: "length",
                slug: "length",
            },
            {
                label: "Width",
                value: "width",
                slug: "width",
            },
            {
                label: "Gusset",
                value: "gusset",
                slug: "gusset"
            },
        ]
    },
    "Material": {
        title: "Material",
        id: 2,
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "Plain White",
                des: "Like printing on white canvas",
                value: "Plain White"
            },
            {
                title: "Metalized",
                des: "Provide metallic effect",
                value: "Metalized"
            },
            {
                title: "Clear bags",
                des: "Transparent, durable, versatile, and protective",
                value: "Clear bags",
            },
            {
                title: "Metalized + Clear",
                des: "Shiny, transparent, durable, and versatile",
                value: "Metalized + Clear",
            },
            {
                title: "Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Foil",
            },
            {
                title: "Kraft",
                des: "Eco-friendly, natural, rustic charm.",
                value: "Kraft",
            },
        ]
    },
    "Thickness": {
        title: "Thickness",
        type: 2,
        isMultiple: false,
        id: 3,
        info: "Thickness refers to the gauge or caliper of the material being printed on, influencing the sturdiness and appearance of the final product.",
        slug: "thickness",
        options: [
            {
                title: "80 microns",
                des: "3.150 Mil",
                value: "80 microns"
            },
            {
                title: "90 microns",
                des: "3.543 Mil",
                value: "90 microns"
            },
            {
                title: "100 microns",
                des: "3.937 Mil",
                value: "100 microns",
            },
            {
                title: "110 microns",
                des: "4.331 Mil",
                value: "110 microns"
            },
            {
                title: "120 microns",
                des: "4.724 Mil",
                value: "120 microns"
            },
            {
                title: "130 microns",
                des: "5.118 Mil",
                value: "130 microns",
            },
            {
                title: "140 microns",
                des: "5.512 Mil",
                value: "140 microns"
            },
            {
                title: "150 microns",
                des: "5.906 Mil",
                value: "150 microns"
            },

        ]
    },
    "Add-ons": {
        title: "Add-ons",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "",
        slug: "add-ons",
        options: [
            {
                title: "Tear Notch",
                des: "Pre-cut opening for easy access",
                value: "Tear Notch"
            },
            {
                title: "Hang Hole",
                des: "Pre-punched hole for hanging",
                value: "Hang Hole"
            },
            {
                title: "Child Resistant",
                des: "Secure closure to prevent access",
                value: "Child Resistant",
            },
            {
                title: "Press to close standard",
                des: "Simple, resealable closure for freshness",
                value: "Press to close standard"
            },

        ]
    },
    "Finishes": {
        title: "Finishes",
        id: 5,
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss"
            },

        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 6,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra-finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil"
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing"
            },

        ]
    },
    "Quantity": {
        id: 7,
        title: "Quantity",
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const mylarDetailsFlatPouch = {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        id: 1,
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "Width",
                value: "width",
                slug: "width",
            },
            {
                label: "Height",
                value: "Height",
                slug: "Height",
            },
            
            {
                label: "Gusset",
                value: "gusset",
                slug: "gusset"
            },
        ]
    },
    "Material": {
        title: "Material",
        id: 2,
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "Plain White",
                des: "Like printing on white canvas",
                value: "Plain White"
            },
            {
                title: "Metalized",
                des: "Provide metallic effect",
                value: "Metalized"
            },
            {
                title: "Clear bags",
                des: "Transparent, durable, versatile, and protective",
                value: "Clear bags",
            },
            {
                title: "Metalized + Clear",
                des: "Shiny, transparent, durable, and versatile",
                value: "Metalized + Clear",
            },
            {
                title: "Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Foil",
            },
            {
                title: "Kraft",
                des: "Eco-friendly, natural, rustic charm.",
                value: "Kraft",
            },
        ]
    },
    "Thickness": {
        title: "Thickness",
        type: 2,
        isMultiple: false,
        id: 3,
        info: "Thickness refers to the gauge or caliper of the material being printed on, influencing the sturdiness and appearance of the final product.",
        slug: "thickness",
        options: [
            {
                title: "80 microns",
                des: "3.150 Mil",
                value: "80 microns"
            },
            {
                title: "90 microns",
                des: "3.543 Mil",
                value: "90 microns"
            },
            {
                title: "100 microns",
                des: "3.937 Mil",
                value: "100 microns",
            },
            {
                title: "110 microns",
                des: "4.331 Mil",
                value: "110 microns"
            },
            {
                title: "120 microns",
                des: "4.724 Mil",
                value: "120 microns"
            },
            {
                title: "130 microns",
                des: "5.118 Mil",
                value: "130 microns",
            },
            {
                title: "140 microns",
                des: "5.512 Mil",
                value: "140 microns"
            },
            {
                title: "150 microns",
                des: "5.906 Mil",
                value: "150 microns"
            },

        ]
    },
    "Add-ons": {
        title: "Add-ons",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "",
        slug: "add-ons",
        options: [
            {
                title: "Tear Notch",
                des: "Pre-cut opening for easy access",
                value: "Tear Notch"
            },
            {
                title: "Hang Hole",
                des: "Pre-punched hole for hanging",
                value: "Hang Hole"
            },
            {
                title: "Child Resistant",
                des: "Secure closure to prevent access",
                value: "Child Resistant",
            },
            {
                title: "Press to close standard",
                des: "Simple, resealable closure for freshness",
                value: "Press to close standard"
            },

        ]
    },
    "Finishes": {
        title: "Finishes",
        id: 5,
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss"
            },

        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 6,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra-finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil"
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing"
            },

        ]
    },
    "Quantity": {
        id: 7,
        title: "Quantity",
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const mylarDetailsPolyMailers = {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        id: 1,
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "Width",
                value: "width",
                slug: "width",
            },
            {
                label: "Height",
                value: "Height",
                slug: "Height",
            },
            
            {
                label: "Gusset",
                value: "gusset",
                slug: "gusset"
            },
        ]
    },
    "Material": {
        title: "Material",
        id: 2,
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "Plain White",
                des: "Like printing on white canvas",
                value: "Plain White"
            },
            {
                title: "Metalized",
                des: "Provide metallic effect",
                value: "Metalized"
            },
            {
                title: "Clear bags",
                des: "Transparent, durable, versatile, and protective",
                value: "Clear bags",
            },
            {
                title: "Metalized + Clear",
                des: "Shiny, transparent, durable, and versatile",
                value: "Metalized + Clear",
            },
            {
                title: "Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Foil",
            },
            {
                title: "Kraft",
                des: "Eco-friendly, natural, rustic charm.",
                value: "Kraft",
            },
        ]
    },
    "Thickness": {
        title: "Thickness",
        type: 2,
        isMultiple: false,
        id: 3,
        info: "Thickness refers to the gauge or caliper of the material being printed on, influencing the sturdiness and appearance of the final product.",
        slug: "thickness",
        options: [
            {
                title: "80 microns",
                des: "3.150 Mil",
                value: "80 microns"
            },
            {
                title: "90 microns",
                des: "3.543 Mil",
                value: "90 microns"
            },
            {
                title: "100 microns",
                des: "3.937 Mil",
                value: "100 microns",
            },
            {
                title: "110 microns",
                des: "4.331 Mil",
                value: "110 microns"
            },
            {
                title: "120 microns",
                des: "4.724 Mil",
                value: "120 microns"
            },
            {
                title: "130 microns",
                des: "5.118 Mil",
                value: "130 microns",
            },
            {
                title: "140 microns",
                des: "5.512 Mil",
                value: "140 microns"
            },
            {
                title: "150 microns",
                des: "5.906 Mil",
                value: "150 microns"
            },

        ]
    },
    "Add-ons": {
        title: "Add-ons",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "",
        slug: "add-ons",
        options: [
            {
                title: "Tear Notch",
                des: "Pre-cut opening for easy access",
                value: "Tear Notch"
            },
            {
                title: "Hang Hole",
                des: "Pre-punched hole for hanging",
                value: "Hang Hole"
            },
            {
                title: "Child Resistant",
                des: "Secure closure to prevent access",
                value: "Child Resistant",
            },
            {
                title: "Press to close standard",
                des: "Simple, resealable closure for freshness",
                value: "Press to close standard"
            },

        ]
    },
    "Finishes": {
        title: "Finishes",
        id: 5,
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss"
            },

        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 6,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra-finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil"
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing"
            },

        ]
    },
    "Quantity": {
        id: 7,
        title: "Quantity",
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const mylarDetailsSpoutPouches= {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        id: 1,
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "Width",
                value: "width",
                slug: "width",
            },
            {
                label: "Height",
                value: "Height",
                slug: "Height",
            },
            
            {
                label: "Gusset",
                value: "gusset",
                slug: "gusset"
            },
        ]
    },
    "Material": {
        title: "Material",
        id: 2,
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "Plain White",
                des: "Like printing on white canvas",
                value: "Plain White"
            },
            {
                title: "Metalized",
                des: "Provide metallic effect",
                value: "Metalized"
            },
            {
                title: "Clear bags",
                des: "Transparent, durable, versatile, and protective",
                value: "Clear bags",
            },
            {
                title: "Metalized + Clear",
                des: "Shiny, transparent, durable, and versatile",
                value: "Metalized + Clear",
            },
            {
                title: "Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Foil",
            },
            {
                title: "Kraft",
                des: "Eco-friendly, natural, rustic charm.",
                value: "Kraft",
            },
        ]
    },
    "Thickness": {
        title: "Thickness",
        type: 2,
        isMultiple: false,
        id: 3,
        info: "Thickness refers to the gauge or caliper of the material being printed on, influencing the sturdiness and appearance of the final product.",
        slug: "thickness",
        options: [
            {
                title: "80 microns",
                des: "3.150 Mil",
                value: "80 microns"
            },
            {
                title: "90 microns",
                des: "3.543 Mil",
                value: "90 microns"
            },
            {
                title: "100 microns",
                des: "3.937 Mil",
                value: "100 microns",
            },
            {
                title: "110 microns",
                des: "4.331 Mil",
                value: "110 microns"
            },
            {
                title: "120 microns",
                des: "4.724 Mil",
                value: "120 microns"
            },
            {
                title: "130 microns",
                des: "5.118 Mil",
                value: "130 microns",
            },
            {
                title: "140 microns",
                des: "5.512 Mil",
                value: "140 microns"
            },
            {
                title: "150 microns",
                des: "5.906 Mil",
                value: "150 microns"
            },

        ]
    },
    "Add-ons": {
        title: "Add-ons",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "",
        slug: "add-ons",
        options: [
            {
                title: "Tear Notch",
                des: "Pre-cut opening for easy access",
                value: "Tear Notch"
            },
            {
                title: "Hang Hole",
                des: "Pre-punched hole for hanging",
                value: "Hang Hole"
            },
            {
                title: "Child Resistant",
                des: "Secure closure to prevent access",
                value: "Child Resistant",
            },
            {
                title: "Press to close standard",
                des: "Simple, resealable closure for freshness",
                value: "Press to close standard"
            },

        ]
    },
    "Finishes": {
        title: "Finishes",
        id: 5,
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss"
            },

        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 6,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra-finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil"
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing"
            },

        ]
    },
    "Quantity": {
        id: 7,
        title: "Quantity",
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const mylarDetailsRollStocks= {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        id: 1,
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "Width",
                value: "width",
                slug: "width",
            },
            {
                label: "Height",
                value: "Height",
                slug: "Height",
            },
            
            {
                label: "Gusset",
                value: "gusset",
                slug: "gusset"
            },
        ]
    },
    "Material": {
        title: "Material",
        id: 2,
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "Plain White",
                des: "Like printing on white canvas",
                value: "Plain White"
            },
            {
                title: "Metalized",
                des: "Provide metallic effect",
                value: "Metalized"
            },
            {
                title: "Clear bags",
                des: "Transparent, durable, versatile, and protective",
                value: "Clear bags",
            },
            {
                title: "Metalized + Clear",
                des: "Shiny, transparent, durable, and versatile",
                value: "Metalized + Clear",
            },
            {
                title: "Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Foil",
            },
            {
                title: "Kraft",
                des: "Eco-friendly, natural, rustic charm.",
                value: "Kraft",
            },
        ]
    },
    "Thickness": {
        title: "Thickness",
        type: 2,
        isMultiple: false,
        id: 3,
        info: "Thickness refers to the gauge or caliper of the material being printed on, influencing the sturdiness and appearance of the final product.",
        slug: "thickness",
        options: [
            {
                title: "80 microns",
                des: "3.150 Mil",
                value: "80 microns"
            },
            {
                title: "90 microns",
                des: "3.543 Mil",
                value: "90 microns"
            },
            {
                title: "100 microns",
                des: "3.937 Mil",
                value: "100 microns",
            },
            {
                title: "110 microns",
                des: "4.331 Mil",
                value: "110 microns"
            },
            {
                title: "120 microns",
                des: "4.724 Mil",
                value: "120 microns"
            },
            {
                title: "130 microns",
                des: "5.118 Mil",
                value: "130 microns",
            },
            {
                title: "140 microns",
                des: "5.512 Mil",
                value: "140 microns"
            },
            {
                title: "150 microns",
                des: "5.906 Mil",
                value: "150 microns"
            },

        ]
    },
    "Add-ons": {
        title: "Add-ons",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "",
        slug: "add-ons",
        options: [
            {
                title: "Tear Notch",
                des: "Pre-cut opening for easy access",
                value: "Tear Notch"
            },
            {
                title: "Hang Hole",
                des: "Pre-punched hole for hanging",
                value: "Hang Hole"
            },
            {
                title: "Child Resistant",
                des: "Secure closure to prevent access",
                value: "Child Resistant",
            },
            {
                title: "Press to close standard",
                des: "Simple, resealable closure for freshness",
                value: "Press to close standard"
            },

        ]
    },
    "Finishes": {
        title: "Finishes",
        id: 5,
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss"
            },

        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 6,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra-finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil"
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing"
            },

        ]
    },
    "Quantity": {
        id: 7,
        title: "Quantity",
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const mylarDetailsStockPouches= {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        id: 1,
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "Width",
                value: "width",
                slug: "width",
            },
            {
                label: "Height",
                value: "Height",
                slug: "Height",
            },
            
            {
                label: "Gusset",
                value: "gusset",
                slug: "gusset"
            },
        ]
    },
    "Material": {
        title: "Material",
        id: 2,
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "Plain White",
                des: "Like printing on white canvas",
                value: "Plain White"
            },
            {
                title: "Metalized",
                des: "Provide metallic effect",
                value: "Metalized"
            },
            {
                title: "Clear bags",
                des: "Transparent, durable, versatile, and protective",
                value: "Clear bags",
            },
            {
                title: "Metalized + Clear",
                des: "Shiny, transparent, durable, and versatile",
                value: "Metalized + Clear",
            },
            {
                title: "Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Foil",
            },
            {
                title: "Kraft",
                des: "Eco-friendly, natural, rustic charm.",
                value: "Kraft",
            },
        ]
    },
    "Thickness": {
        title: "Thickness",
        type: 2,
        isMultiple: false,
        id: 3,
        info: "Thickness refers to the gauge or caliper of the material being printed on, influencing the sturdiness and appearance of the final product.",
        slug: "thickness",
        options: [
            {
                title: "80 microns",
                des: "3.150 Mil",
                value: "80 microns"
            },
            {
                title: "90 microns",
                des: "3.543 Mil",
                value: "90 microns"
            },
            {
                title: "100 microns",
                des: "3.937 Mil",
                value: "100 microns",
            },
            {
                title: "110 microns",
                des: "4.331 Mil",
                value: "110 microns"
            },
            {
                title: "120 microns",
                des: "4.724 Mil",
                value: "120 microns"
            },
            {
                title: "130 microns",
                des: "5.118 Mil",
                value: "130 microns",
            },
            {
                title: "140 microns",
                des: "5.512 Mil",
                value: "140 microns"
            },
            {
                title: "150 microns",
                des: "5.906 Mil",
                value: "150 microns"
            },

        ]
    },
    "Add-ons": {
        title: "Add-ons",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "",
        slug: "add-ons",
        options: [
            {
                title: "Tear Notch",
                des: "Pre-cut opening for easy access",
                value: "Tear Notch"
            },
            {
                title: "Hang Hole",
                des: "Pre-punched hole for hanging",
                value: "Hang Hole"
            },
            {
                title: "Child Resistant",
                des: "Secure closure to prevent access",
                value: "Child Resistant",
            },
            {
                title: "Press to close standard",
                des: "Simple, resealable closure for freshness",
                value: "Press to close standard"
            },

        ]
    },
    "Finishes": {
        title: "Finishes",
        id: 5,
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss"
            },

        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 6,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra-finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil"
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing"
            },

        ]
    },
    "Quantity": {
        id: 7,
        title: "Quantity",
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const mylarDetailsCustomShapePouches= {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        id: 1,
        info: "",
        type: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "Width",
                value: "width",
                slug: "width",
            },
            {
                label: "Height",
                value: "Height",
                slug: "Height",
            },
            
            {
                label: "Gusset",
                value: "gusset",
                slug: "gusset"
            },
        ]
    },
    "Material": {
        title: "Material",
        id: 2,
        info: "Material choice determines the substrate for printing, including options like paper, cardboard, vinyl, or plastic, influencing the final product's texture and durability.",
        type: 2,
        isMultiple: false,
        slug: "material",
        options: [
            {
                title: "Plain White",
                des: "Like printing on white canvas",
                value: "Plain White"
            },
            {
                title: "Metalized",
                des: "Provide metallic effect",
                value: "Metalized"
            },
            {
                title: "Clear bags",
                des: "Transparent, durable, versatile, and protective",
                value: "Clear bags",
            },
            {
                title: "Metalized + Clear",
                des: "Shiny, transparent, durable, and versatile",
                value: "Metalized + Clear",
            },
            {
                title: "Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Foil",
            },
            {
                title: "Kraft",
                des: "Eco-friendly, natural, rustic charm.",
                value: "Kraft",
            },
        ]
    },
    "Thickness": {
        title: "Thickness",
        type: 2,
        isMultiple: false,
        id: 3,
        info: "Thickness refers to the gauge or caliper of the material being printed on, influencing the sturdiness and appearance of the final product.",
        slug: "thickness",
        options: [
            {
                title: "80 microns",
                des: "3.150 Mil",
                value: "80 microns"
            },
            {
                title: "90 microns",
                des: "3.543 Mil",
                value: "90 microns"
            },
            {
                title: "100 microns",
                des: "3.937 Mil",
                value: "100 microns",
            },
            {
                title: "110 microns",
                des: "4.331 Mil",
                value: "110 microns"
            },
            {
                title: "120 microns",
                des: "4.724 Mil",
                value: "120 microns"
            },
            {
                title: "130 microns",
                des: "5.118 Mil",
                value: "130 microns",
            },
            {
                title: "140 microns",
                des: "5.512 Mil",
                value: "140 microns"
            },
            {
                title: "150 microns",
                des: "5.906 Mil",
                value: "150 microns"
            },

        ]
    },
    "Add-ons": {
        title: "Add-ons",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "",
        slug: "add-ons",
        options: [
            {
                title: "Tear Notch",
                des: "Pre-cut opening for easy access",
                value: "Tear Notch"
            },
            {
                title: "Hang Hole",
                des: "Pre-punched hole for hanging",
                value: "Hang Hole"
            },
            {
                title: "Child Resistant",
                des: "Secure closure to prevent access",
                value: "Child Resistant",
            },
            {
                title: "Press to close standard",
                des: "Simple, resealable closure for freshness",
                value: "Press to close standard"
            },

        ]
    },
    "Finishes": {
        title: "Finishes",
        id: 5,
        type: 2,
        isMultiple: true,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss"
            },

        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 6,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra-finishes",
        options: [
            {
                title: "Embossing",
                des: "Elegant raised patterns for sophistication",
                value: "Embossing"
            },
            {
                title: "Deep Embossing",
                des: "Bold, textured, and striking depth",
                value: "Deep Embossing"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV",
            },
            {
                title: "Window",
                des: "Clear, visible display for products",
                value: "Window"
            },
            {
                title: "Inside Printing",
                des: "Prints inside for unique presentation",
                value: "Inside Printing"
            },
            {
                title: "Hot Stamp Foil",
                des: "Luxurious metallic finish for elegance",
                value: "Hot Stamp Foil"
            },
            {
                title: "Debossing",
                des: "Indented designs for a subtle texture",
                value: "Debossing"
            },

        ]
    },
    "Quantity": {
        id: 7,
        title: "Quantity",
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const labelsDetails = {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Dimension": {
        isMultiple: true,
        title: "Dimension",
        info: "",
        type: 1,
        id: 1,
        slug: "dimension",
        units: units,
        options: [
            {
                label: "width",
                value: "width",
                slug: "width"
            },
            {
                label: "Height",
                value: "height",
                slug: "height",
            },


        ]
    },
    "Direction": {
        title: "Direction",
        id: 2,
        type: 2,
        isMultiple: false,
        info: "Printing direction determines how graphics or text are oriented on the material, such as portrait (vertical) or landscape (horizontal), affecting design and readability.",
        slug: "direction",

        options: [
            {
                title: "Top first",
                value: "Top first"
            },
            {
                title: "Bottom first",
                value: "Bottom first"
            },
            {
                title: "Right side first",
                value: "Right side first"
            },
            {
                title: "Left side first",
                value: "Left side first"
            },
            {
                title: "No preference/ hand Applied",
                value: "No preference/ hand Applied"
            },

        ]
    },
    "Material": {
        title: "Material",
        info: "",
        type: 2,
        isMultiple: false,
        id: 3,
        slug: "material",
        options: [
            {
                title: "Holographic",
                des: "Like printing on white canvas",
                value: "Holographic"
            },
            {
                title: "Silver",
                des: "Provide metallic effect",
                value: "Silver"
            },
            {
                title: "White",
                des: "Transparent, durable, versatile, and protective",
                value: "White",
            },
            {
                title: "Vinyl",
                des: "Shiny, transparent, durable, and versatile",
                value: "Vinyl"
            },
            {
                title: "Clear",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Clear",
            },
        ]
    },
    "Finishes": {
        title: "Finishes",
        type: 2,
        isMultiple: true,
        id: 4,
        info: "Printing finishes refer to the surface treatment of printed materials, such as gloss, matte, or UV coating, to enhance their appearance and durability",
        slug: "finishes",
        options: [
            {
                title: "Gloss Laminated",
                des: "Shiny, durable, vibrant, and protective finish",
                value: "Gloss Laminated"
            },
            {
                title: "Drip Off",
                des: "Textured, matte-gloss contrast for impact",
                value: "Drip Off"
            },
            {
                title: "Softouch Lamination",
                des: "Velvety, smooth, luxurious, and durable finish",
                value: "Softouch Lamination",
            },
            {
                title: "Matte Lamination",
                des: "Elegant, smooth, subtle, non-reflective",
                value: "Matte Lamination"
            },
            {
                title: "Spot Gloss",
                des: "Shiny accents for striking contrast",
                value: "Spot Gloss",
            }
        ]
    },
    "Extra Finishes": {
        title: "Extra Finishes",
        type: 2,
        isMultiple: true,
        id: 5,
        info: "Extra finishes include specialized treatments like embossing, debossing, foil stamping, or spot UV coating, adding unique visual and tactile effects to printed products.",
        slug: "extra_finishes",
        options: [
            {
                title: "Spot Foil",
                des: "Enhanced shine, durability, premium appeal.",
                value: "Spot Foil"
            },
            {
                title: "3D Raised UV",
                des: "Vivid, dimensional texture with gloss.",
                value: "3D Raised UV"
            },

        ]
    },
    "Quantity": {
        title: "Quantity",
        type: 3,
        id: 6,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}
const bannerDetails = {
    "Enter your details": {
        isMultiple: true,
        id: 1,
        title: "Dimension",
        info: "",
        type: 0,
        slug: "dimension",
        units: units,
        options: [
           
        ]
    },
    "Quantity": {
        title: "Quantity",
        id: 1,
        type: 3,
        info: "",
        slug: "quantity",
        options: [
            {
                label: "500",
                value: "500"
            },
            {
                label: "1000",
                value: "1000"
            },
            {
                label: "2000",
                value: "2000"
            },
            {
                label: "3000",
                value: "3000"
            },
            {
                label: "4000",
                value: "4000"
            },
            {
                label: "5000",
                value: "5000"
            },
            {
                label: "10000",
                value: "10000"
            },
            {
                label: "others",
                value: "others"
            }
        ]
    },
}

export const customQuoteData = {
    boxes: {
        isName: true,
        slug: "custom-boxes",
        heading: "Boxes Packaging",
        isContents: true,
        types: {},
        isSubType: false,
        instructions: true,
        instructions_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        artwork_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        artwork: true,
        main_image: "/customQuote/Choose Your Product/side-banner.webp",
        contentsData: [
            { label: "Coffee", value: "coffee" },
            { label: "Tea", value: "tea" },
            { label: "Food & snacks", value: "food-snacks" },
            { label: "Spices & seasonings", value: "spices-seasonings" },
            { label: "Candy", value: "candy" },
            { label: "Chocolate", value: "chocolate" },
            { label: "Vitamins & supplements", value: "vitamins-supplements" },
            { label: "Soap & detergent", value: "soap-detergent" },
            { label: "Pet treats & food", value: "pet-treats-food" },
            { label: "Cannabis", value: "cannabis" },
            { label: "Health & Beauty", value: "health-beauty" },
            { label: "Other", value: "other" },
        ],
        product_details: { ...boxesDetails },
    },
    mylar: {
        isName: false,
        heading: "Mylar Bags/Pouches",
        slug:"custom-mylar-bags",
        isContents: true,
        instructions: true,
        isSubType: true,
        instructions_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        artwork_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        main_image: "/customQuote/Mylar Bags/mylar.webp",
        artwork: true,
        contentsData: [
            { label: "Coffee", value: "coffee" },
            { label: "Tea", value: "tea" },
            { label: "Food & snacks", value: "food-snacks" },
            { label: "Spices & seasonings", value: "spices-seasonings" },
            { label: "Candy", value: "candy" },
            { label: "Chocolate", value: "chocolate" },
            { label: "Vitamins & supplements", value: "vitamins-supplements" },
            { label: "Soap & detergent", value: "soap-detergent" },
            { label: "Pet treats & food", value: "pet-treats-food" },
            { label: "Cannabis", value: "cannabis" },
            { label: "Health & Beauty", value: "health-beauty" },
            { label: "Other", value: "other" },
        ],
        types: {
            "Stand up Pouch": {
                image: "/customQuote/Mylar Bags/standup.webp",
                title: "Stand up Pouch",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetails
                }
            },
            "Flat pouch": {
                image: "/customQuote/Mylar Bags/flat.webp",
                title: "Flat pouch",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetailsFlatPouch
                }
            },
            "Guesset bag": {
                image: "/customQuote/Mylar Bags/guesset.webp",
                title: "Guesset bag",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetails
                }
            },
            "Poly Mailers": {
                image: "/customQuote/Mylar Bags/poly.webp",
                title: "Poly Mailers",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetailsPolyMailers
                }
            },
            "Spout pouches": {
                image: "/customQuote/Mylar Bags/spout.webp",
                title: "Spout pouches",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetailsSpoutPouches
                }
            },
            "Roll Stocks": {
                image: "/customQuote/Mylar Bags/roll.webp",
                title: "Roll Stocks",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetailsRollStocks
                }
            },
            "Stock Pouches": {
                image: "/customQuote/Mylar Bags/stock.webp",
                title: "Stock Pouches",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetailsStockPouches
                }
            },
            "Custom Shape Pouches": {
                image: "/customQuote/Mylar Bags/shape.webp",
                title: "Custom Shape Pouches",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...mylarDetailsCustomShapePouches
                }
            },
        }
    },
    labels: {
        isName: false,
        heading: "Lables & Stickers",
        slug:"custom-labels",
        isContents: false,
        instructions: true,
        isSubType: true,
        artwork: true,
        instructions_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        artwork_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        main_image: "/customQuote/labels/main_img.webp",
        types: {
            "Custom shape Stickers": {
                image: "/customQuote/labels/products/shape.webp",
                title: "Custom shape Stickers",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Die Cut Stickers": {
                image: "/customQuote/labels/products/die.webp",
                title: "Die Cut Stickers",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Round or Oval Stickers": {
                image: "/customQuote/labels/products/round.webp",
                title: "Round or Oval Stickers",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Square or rectangle": {
                image: "/customQuote/labels/products/square.webp",
                title: "Square or rectangle",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Sticker Sheets": {
                image: "/customQuote/labels/products/sheet.webp",
                title: "Sticker Sheets",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Domed 3d stickers or labels": {
                image: "/customQuote/labels/products/dome.webp",
                title: "Domed 3d stickers or labels",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Custom shape Labels": {
                image: "/customQuote/labels/products/shape_label.webp",
                title: "Custom shape Labels",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Die-Cut Labels": {
                image: "/customQuote/labels/products/label.webp",
                title: "Die-Cut Labels",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Barcode Labels": {
                image: "/customQuote/labels/products/bar.webp",
                title: "Barcode Labels",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Round or Oval Labels": {
                image: "/customQuote/labels/products/oval.webp",
                title: "Round or Oval Labels",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
            "Roll Labels": {
                image: "/customQuote/labels/products/roll.webp",
                title: "Roll Labels",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...labelsDetails
                }
            },
        }

    },
    banner: {
        isName: false,
        heading: "Banners",
        slug:"vinyl-banner",
        isContents: false,
        isSubType: true,
        types: {
            "Pull up banners": {
                image: "/Signs & Banners/WebP/pull.webp",
                title: "Pull up banners",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...bannerDetails
                }
            },
            "Pop Up Display": {
                image: "/Signs & Banners/WebP/pop.webp",
                title: "Pop Up Display",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...bannerDetails
                }
            },
            "Table cloth": {
                image: "/Signs & Banners/WebP/table.webp",
                title: "Table cloth",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...bannerDetails
                }
            },
            "Vinyl banner": {
                image: "/Signs & Banners/WebP/vinyl.webp",
                title: "Vinyl banner",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...bannerDetails
                }
            },
            "Step and repeat display": {
                image: "/Signs & Banners/WebP/step.webp",
                title: "Step and repeat display",
                main_image: "/customQuote/Choose Your Product/side-banner.webp",
                product_details: {
                    ...bannerDetails
                }
            }
        },
        instructions: true,
        artwork: true,
        instructions_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        artwork_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum.",
        main_image: "/Signs & Banners/WebP/pull-banner.webp",
    }
}
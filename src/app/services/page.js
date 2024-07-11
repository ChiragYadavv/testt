import React from 'react'
import Form from '../components/Form'
import './services.css'
const page = () => {
  return (
    <div>
      <div id='background'>
        <img src="./assets/servicebg.jpg"  alt="" />
      </div>
      <div className="content">
        <h1 id="headingservice">Services We offer</h1>
        <div className="banner first">
          <div className="flexcontainer">
            <h1>Paint Protection Film (PPF)</h1>
            <p>
              Paint Protection Film (PPF) is a clear, durable layer applied to your car's exterior to shield it from scratches, chips, and minor abrasions. This transparent film is designed to maintain the original paint's integrity, preserving the car's aesthetic appeal while protecting it from environmental hazards such as road debris, bird droppings, and UV rays. PPF is an excellent investment for maintaining your vehicle's resale value and ensuring it always looks its best.
            </p>
          </div>
          <img src="./assets/ppf.jpeg" alt="" />
        </div>

        <div className="pagebreak"></div>

        <div className="banner even">
          <img src="./assets/Ceramic Coating.jpeg" alt="" />
          <div className="flexcontainer">
            <h1>Ceramic Coating</h1>
            <p>
              Ceramic coating offers a high-gloss, long-lasting shield for your car's exterior. This liquid polymer bonds chemically with the factory paint, providing a layer of protection that is more durable and resistant to damage than traditional waxes or sealants. Ceramic coatings are hydrophobic, meaning they repel water and dirt, making your car easier to clean and maintain. They also protect against UV rays, oxidation, and chemical stains, ensuring your vehicle retains its showroom shine for years.
            </p>
          </div>
        </div>

        <div className="pagebreak"></div>

        <div className="banner">
          <div className="flexcontainer">
            <h1>Wrapping</h1>
            <p>
              Wrapping involves applying a vinyl film to your car's exterior, offering a versatile and cost-effective way to change its appearance. Whether you want a complete color change, a unique design, or protection for your original paint, wrapping can achieve it. The high-quality vinyl used in our wrapping services is durable and protects your car's paint from scratches, UV rays, and minor abrasions. Wrapping also allows for easy removal and replacement, giving you the flexibility to update your car's look whenever you desire. Our expert technicians ensure a seamless application for a flawless finish.
            </p>
          </div>
          <img src="./assets/Wrapping.jpeg" alt="" />
        </div>

        <div className="pagebreak"></div>

        <div className="banner even">
          <img src="./assets/EngineDressing.jpeg" alt="" />
          <div className="flexcontainer">
            <h1>Engine Dressing</h1>
            <p>
              Engine dressing is the finishing touch for a thoroughly detailed engine bay. After cleaning, we apply a high-quality dressing to all plastic, rubber, and vinyl components under the hood. This treatment not only makes the engine look brand new by giving it a glossy finish but also protects these components from cracking and drying out. Engine dressing helps to keep your engine bay looking pristine and makes future cleaning easier, enhancing the overall presentation of your vehicle.
            </p>
          </div>
        </div>

        <div className="pagebreak"></div>

        <div className="banner">
          <div className="flexcontainer">
            <h1>Interior Cleaning</h1>
            <p>
              Interior cleaning focuses on restoring the cleanliness and freshness of your car's interior. This comprehensive service includes vacuuming carpets and upholstery, wiping down all surfaces, cleaning windows, and treating leather and fabric seats. We use specialized products designed to remove dirt, stains, and odors, ensuring a deep clean that leaves your car's interior looking and smelling like new. Interior cleaning enhances comfort and maintains the value of your vehicle by preserving its interior condition.
            </p>
          </div>
          <img src="./assets/InteriorCleaning.jpeg" alt="" />
        </div>

        <div className="pagebreak"></div>

        <div className="banner even">
          <img src="./assets/maintenecewash.jpeg" alt="" />
          <div className="flexcontainer">
            <h1>Maintenance Wash</h1>
            <p>
              A maintenance wash is essential for keeping your car in top condition between more intensive detailing sessions. This service includes a thorough exterior wash, wheel cleaning, and an interior vacuum. We use high-quality, pH-balanced products to ensure your car's paint and surfaces are cleaned safely and effectively. Regular maintenance washes help prevent the buildup of dirt and grime, ensuring your car always looks fresh and well-kept.
            </p>
          </div>
        </div>

        <div className="pagebreak"></div>

        <div className="banner">
          <div className="flexcontainer">
            <h1>Rubbing</h1>
            <p>
              Rubbing, or rubbing compound application, is a crucial step in the paint correction process. It involves using an abrasive compound to remove fine scratches, oxidation, and other surface imperfections from your car's paint. This process helps to smooth out the paint and prepares it for polishing. By effectively removing these defects, rubbing enhances the overall gloss and clarity of your vehicle's finish, making it look like new again. Our skilled technicians ensure the rubbing process is performed with precision to achieve optimal results.
            </p>
          </div>
          <img src="./assets/grinder.jpeg" alt="" />
        </div>

        <div className="pagebreak"></div>

        <div className="banner even">
          <img src="./assets/windsheild.jpeg" alt="" />
          <div className="flexcontainer">
            <h1>Windshield Protection</h1>
            <p>
              Windshield protection is designed to enhance the durability and clarity of your vehicle's windshield. This service involves applying a high-quality protective coating that creates a barrier against chips, cracks, and scratches caused by road debris and environmental factors. The coating also improves visibility by repelling water, dirt, and other contaminants, ensuring a clearer view during adverse weather conditions. Windshield protection not only extends the life of your windshield but also enhances your driving safety by maintaining optimal visibility.
            </p>
          </div>
        </div>

        <div className="pagebreak"></div>

        <div className="banner">
          <div className="flexcontainer">
            <h1>Sanding</h1>
            <p>
              Sanding is a meticulous process that involves smoothing and leveling your car's paint surface to remove imperfections, such as scratches, oxidation, and blemishes. This technique is crucial in the paint correction process, as it prepares the surface for polishing and refinishing. Our skilled technicians use specialized tools and techniques to ensure that the sanding is done evenly and safely, restoring the paint to its original smoothness and enhancing the overall appearance of your vehicle.
            </p>
          </div>
          <img src="./assets/grinder.jpeg" alt="" />
        </div>

        <div className="pagebreak"></div>
        <Form></Form>

      </div>
    </div>
  )
}

export default page

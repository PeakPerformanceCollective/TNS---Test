import React from 'react';

const testimonials = [
  { id: 1, name: 'Alex P.', text: 'Joining this gym transformed my life! The trainers are exceptional.' },
  { id: 2, name: 'Jamie L.', text: 'The community here keeps me motivated every day.' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-yinmn-blue text-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-white">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-space-cadet p-6 rounded-lg">
              <p className="mb-4">"{testimonial.text}"</p>
              <p className="font-bold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
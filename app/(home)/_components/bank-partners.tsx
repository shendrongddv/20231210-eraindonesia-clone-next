const BankPartners = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-center gap-3 text-center md:w-4/12 md:items-start md:text-start">
            <h2 className="text-2xl font-bold text-foreground">
              Our Bank Partners
            </h2>
            <p>
              ERA Bank Partners are ready to give you the Best Mortgage Rate and
              Servicec
            </p>
          </div>

          {/* Col */}
          <div className="md:w-7/12">
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci necessitatibus excepturi eaque!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankPartners;

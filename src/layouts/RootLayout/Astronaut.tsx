const Astronaut: React.FC = () => {
  return (
    <div className="self-start flex-2 order-1 md:order-2 max-sm:flex-1 max-w-70 2xl:max-w-80">
      <img className="self-start w-full drop-shadow-xl/50 drop-shadow-white animate-[float_6s_ease_infinite_alternate]" src="/images/astronaut.svg" alt="astronaut" />
    </div>
  )
}

export default Astronaut
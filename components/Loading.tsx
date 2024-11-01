return (
  <div className="relative flex justify-center items-center h-screen">
    <Image
      src="/project23/images/tappyloader.jpg" // Correct path for the background image
      alt="Background"
      fill // Replaces layout="fill" in Next.js 13+
      style={{ objectFit: 'cover', objectPosition: 'center' }}
      className="z-0" // Keeps background behind other content
    />

    <div className="w-full max-w-xl text-white flex flex-col items-center z-10">
      <div className="w-64 h-64 rounded-full circle-outer p-2 mb-8">
        <div className="w-full h-full rounded-full circle-inner overflow-hidden relative">
          <Image
            src={main_character}
            alt="Main Character"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              transform: 'scale(1.05) translateY(10%)',
            }}
          />
        </div>
      </div>

      <Image
        src={loading}
        alt="Loading Icon"
        width={100}
        height={100}
      />
    </div>
  </div>
);

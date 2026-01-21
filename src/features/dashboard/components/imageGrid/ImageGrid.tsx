import house_2 from "../../../../assets/images/house_2.png";

const ImageGrid = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1 min-w-62.5 relative aspect-4/3 overflow-hidden rounded-lg group">
        <img
          src={house_2}
          alt="Urban Prime Plaze Premiere"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
          <p className="text-xs sm:text-sm font-medium text-white/90 mb-1">
            Most Clicked
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">
            Urban Prime Plaza Premiere
          </p>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>

      <div className="flex-1 min-w-62.5 relative aspect-4/3 overflow-hidden rounded-lg group">
        <img
          src={house_2}
          alt="Urban Prime Plaze Premiere"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
          <p className="text-xs sm:text-sm font-medium text-white/90 mb-1 capitalize">
            Most Watchlisted
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">
            Urban Prime Plaza Premiere
          </p>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>

      <div className="flex-1 min-w-62.5 relative aspect-/3 verflow-hidden rounded-lg group">
        <img
          src={house_2}
          alt="Urban Prime Plaze Premiere"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
          <p className="text-xs sm:text-sm font-medium text-white/90 mb-1 capitalize">
            Hottest Listing
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">
            Urban Prime Plaza Premiere
          </p>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

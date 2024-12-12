export function UserAvatars() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-black"
          />
        ))}
      </div>
      <span className="text-sm text-gray-400">
        1000+ işletme tarafından Teklifn ile hazırlanır
      </span>
    </div>
  );
}
export const SkeletonList = () => {
  const cardsCount = 15;

  const renderSkeletonCards = () => {
    return Array.from({ length: cardsCount }, (_, index) => (
      <div key={index} className="skeleton-loading" data-testid="skeleton-card">
        <div className="skeleton-card"></div>
      </div>
    ));
  };

  return <>{renderSkeletonCards()}</>;
};

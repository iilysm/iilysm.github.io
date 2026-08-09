import { useCallback, useEffect, useRef, useState } from 'react'

// Lightweight image carousel: auto-advance, arrows on hover, dots,
// keyboard navigation when focused. No external dependencies.
export default function Carousel({ images, interval = 7000, label }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length
  const trackRef = useRef(null)

  const go = useCallback(
    (next) => setIndex((i) => (i + next + count) % count),
    [count],
  )

  useEffect(() => {
    if (paused || count < 2) return
    const t = setInterval(() => go(1), interval)
    return () => clearInterval(t)
  }, [paused, count, interval, go])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
  }

  return (
    <div
      className="carousel"
      tabIndex={0}
      role="group"
      aria-label={label}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <figure className="carousel-slide" key={img.src}>
            <img
              src={encodeURI(img.src)}
              alt={img.caption}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <figcaption className="carousel-caption">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      {count > 1 && (
        <>
          <button className="carousel-btn prev" aria-label="previous image" onClick={() => go(-1)}>
            {'<'}
          </button>
          <button className="carousel-btn next" aria-label="next image" onClick={() => go(1)}>
            {'>'}
          </button>
          <div className="carousel-dots">
            {images.map((img, i) => (
              <button
                key={img.src}
                className={i === index ? 'active' : ''}
                aria-label={`go to image ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

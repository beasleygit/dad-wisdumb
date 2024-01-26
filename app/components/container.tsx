const Container = ({
  children, className
}: {
  children: React.ReactNode,
  className: string
}) => (
    <div className={`p-3 max-w-theme w-full mx-auto ${className}`}>
      {children}
    </div>      
)

const FullContainer = ({
  children, className
}: {
  children: React.ReactNode,
  className: string
}) => (
    <div className={`max-w-theme w-full mx-auto ${className}`}>
      {children}
    </div>      
)

export { Container, FullContainer }
export const Header = () => 
 {

    return <>
 <div className="min-h-screen bg-gray-400 p-4 font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold mx-50">spark</h1>
        <div className="flex gap-4 text-2xl mx-20">
          <span>history</span>
          <span>days</span>
        </div>
      </div>
    </div>
    </>
 }
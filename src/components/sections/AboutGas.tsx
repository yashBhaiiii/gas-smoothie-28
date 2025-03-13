import { Card } from "../ui/card";

const AboutGas = () => {
  return (
    <section id="about" className="section-padding px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-medium text-blue-600 mb-3">UNDERSTANDING</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What is Gas in Aptos?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gas is the computational fee required to execute operations on the Aptos blockchain. Understanding its components is essential for optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="order-2 lg:order-1 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-6">Gas Fee Components</h3>
            <p className="text-gray-700 mb-6">
              In Aptos, gas fees consist of several components that reflect different aspects of blockchain resource usage:
            </p>
            
            <div className="space-y-4">
              {gasComponents.map((component, index) => (
                <GasComponent
                  key={component.title}
                  {...component}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex items-center justify-center animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-10 animate-pulse-subtle" />
              <Card variant="glass" className="relative p-8 w-full max-w-md">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-4">Gas Fee Breakdown</h4>
                  <p className="text-gray-600 text-sm">
                    Example transaction gas cost distribution
                  </p>
                </div>

                <div className="space-y-4">
                  <GasBreakdownItem name="Computation" percentage={45} color="bg-blue-500" />
                  <GasBreakdownItem name="Storage" percentage={30} color="bg-blue-400" />
                  <GasBreakdownItem name="IO Operations" percentage={15} color="bg-blue-300" />
                  <GasBreakdownItem name="Transaction Size" percentage={10} color="bg-blue-200" />
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">How Gas Works in Aptos</h3>
              <p className="text-gray-700 mb-6">
                Aptos uses a sophisticated gas model to determine the cost of each transaction. Unlike some other blockchains, Aptos separates execution from storage costs for more predictable pricing.
              </p>
              <p className="text-gray-700">
                The gas price can fluctuate based on network demand, but optimization techniques can consistently reduce your costs regardless of market conditions.
              </p>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {howGasWorksItems.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 shadow-subtle border border-gray-100 transform transition-transform hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-blue-600 font-semibold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GasComponent = ({
  title,
  description,
  delay
}: {
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <div
      className="flex items-start p-5 bg-white border border-gray-100 rounded-xl shadow-subtle animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-4" />
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const GasBreakdownItem = ({
  name,
  percentage,
  color
}: {
  name: string;
  percentage: number;
  color: string;
}) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

const gasComponents = [
  {
    title: "Base Gas Fee",
    description: "A minimum fee required for any transaction, regardless of complexity."
  },
  {
    title: "Computation Gas Fee",
    description: "Costs associated with the computational resources required to execute the transaction."
  },
  {
    title: "Storage Gas Fee",
    description: "Fees for reading from and writing to the blockchain's storage."
  },
  {
    title: "Transaction Size Fee",
    description: "Costs proportional to the byte size of your transaction payload."
  }
];

const howGasWorksItems = [
  {
    title: "Calculation",
    description: "Gas units × gas price = total fee in APT tokens"
  },
  {
    title: "Estimation",
    description: "Use the Aptos CLI to estimate costs before deployment"
  },
  {
    title: "Fluctuation",
    description: "Gas prices vary based on network congestion"
  },
  {
    title: "Optimization",
    description: "Reduce gas units through efficient code patterns"
  }
];

export default AboutGas;

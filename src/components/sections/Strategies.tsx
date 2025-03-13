
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Clock, Database, PackageOpen, Code } from "lucide-react";
import { Card } from "../ui/card";

type StrategyTab = "computation" | "storage" | "transaction" | "practices";

const Strategies = () => {
  const [activeTab, setActiveTab] = useState<StrategyTab>("computation");

  return (
    <section id="strategies" className="section-padding px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-medium text-blue-600 mb-3">TECHNIQUES</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Gas Optimization Strategies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Implement these proven strategies to significantly reduce gas consumption in your Aptos Move contracts.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-subtle border border-gray-100 overflow-hidden animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <StrategyTab
              icon={<Clock size={20} />}
              title="Computation"
              description="Reduce computational complexity"
              isActive={activeTab === "computation"}
              onClick={() => setActiveTab("computation")}
            />
            <StrategyTab
              icon={<Database size={20} />}
              title="Storage"
              description="Optimize on-chain storage usage"
              isActive={activeTab === "storage"}
              onClick={() => setActiveTab("storage")}
            />
            <StrategyTab
              icon={<PackageOpen size={20} />}
              title="Transaction Size"
              description="Minimize transaction payload"
              isActive={activeTab === "transaction"}
              onClick={() => setActiveTab("transaction")}
            />
            <StrategyTab
              icon={<Code size={20} />}
              title="Best Practices"
              description="Follow gas-efficient patterns"
              isActive={activeTab === "practices"}
              onClick={() => setActiveTab("practices")}
            />
          </div>

          <div className="p-6 md:p-10 animate-fade-in">
            {activeTab === "computation" && <ComputationContent />}
            {activeTab === "storage" && <StorageContent />}
            {activeTab === "transaction" && <TransactionSizeContent />}
            {activeTab === "practices" && <BestPracticesContent />}
          </div>
        </div>
      </div>
    </section>
  );
};

const StrategyTab = ({
  icon,
  title,
  description,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={cn(
        "flex flex-col items-start p-6 text-left transition-all duration-200 hover:bg-gray-50",
        isActive ? "bg-blue-50" : ""
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "p-2 rounded-lg mb-4",
          isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
};

const ComputationContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold mb-4">Reduce Computational Complexity</h3>
        <p className="text-gray-700 mb-6">
          Computational operations in Aptos Move directly impact gas consumption. By optimizing your algorithms and data handling, you can significantly reduce costs.
        </p>
        
        <ul className="space-y-4 mb-6">
          <OptimizationItem title="Avoid excessive loops">
            Minimize loop iterations or consider alternative approaches to process large datasets.
          </OptimizationItem>
          <OptimizationItem title="Precompute values">
            Calculate values off-chain when possible and pass them as parameters.
          </OptimizationItem>
          <OptimizationItem title="Use efficient data structures">
            Choose appropriate data structures like vectors over maps when applicable.
          </OptimizationItem>
        </ul>
      </div>
      
      <div>
        <Card variant="glass" className="h-full">
          <h4 className="text-lg font-semibold mb-4">Code Example: Optimizing Loops</h4>
          
          <div className="mb-6">
            <div className="text-sm font-medium text-red-500 mb-2">Inefficient</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`module example::inefficient {
  public fun sum_values(n: u64): u64 {
    let sum = 0;
    let i = 0;
    while (i < n) {
      sum = sum + i;
      i = i + 1;
    }
    sum
  }
}`}</code>
            </pre>
          </div>
          
          <div>
            <div className="text-sm font-medium text-green-500 mb-2">Optimized</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`module example::optimized {
  public fun sum_values(n: u64): u64 {
    // Mathematical formula: sum = n * (n - 1) / 2
    if (n == 0) return 0;
    n * (n - 1) / 2
  }
}`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
};

const StorageContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold mb-4">Optimize Storage Usage</h3>
        <p className="text-gray-700 mb-6">
          Storage operations are among the most expensive in terms of gas. Minimizing reads, writes, and the amount of data stored can lead to substantial savings.
        </p>
        
        <ul className="space-y-4 mb-6">
          <OptimizationItem title="Minimize on-chain storage">
            Store only essential data on-chain, use events for historical data.
          </OptimizationItem>
          <OptimizationItem title="Delete unused resources">
            Remove resources that are no longer needed to recover storage fees.
          </OptimizationItem>
          <OptimizationItem title="Batch storage operations">
            Combine multiple storage operations into fewer transactions.
          </OptimizationItem>
        </ul>
      </div>
      
      <div>
        <Card variant="glass" className="h-full">
          <h4 className="text-lg font-semibold mb-4">Code Example: Efficient Storage</h4>
          
          <div className="mb-6">
            <div className="text-sm font-medium text-red-500 mb-2">Inefficient</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`module example::storage_waste {
  struct UserData has key {
    // Storing full history on-chain
    transaction_history: vector<Transaction>,
    unused_field: vector<u8>, // Never used
    settings: vector<u8>,
  }
  
  // Separate function calls for each update
  public fun update_settings(...) { ... }
  public fun add_transaction(...) { ... }
}`}</code>
            </pre>
          </div>
          
          <div>
            <div className="text-sm font-medium text-green-500 mb-2">Optimized</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`module example::storage_efficient {
  struct UserData has key {
    settings: vector<u8>,
    // No unused fields
  }

  // Using events for historical data
  struct TransactionEvent has drop, store {
    user: address,
    data: vector<u8>,
    timestamp: u64,
  }
  
  // Batched updates
  public fun update_user_data(...) {
    // Update settings and emit event in one call
  }
}`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
};

const TransactionSizeContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold mb-4">Reduce Transaction Size</h3>
        <p className="text-gray-700 mb-6">
          Transaction payload size directly affects gas costs. Smaller transactions require less bandwidth and processing power.
        </p>
        
        <ul className="space-y-4 mb-6">
          <OptimizationItem title="Pack data efficiently">
            Use compact data formats and minimize redundancy.
          </OptimizationItem>
          <OptimizationItem title="Use smaller data types">
            Choose the smallest appropriate data type for each variable.
          </OptimizationItem>
          <OptimizationItem title="Batch transactions">
            Combine multiple operations into single transactions.
          </OptimizationItem>
        </ul>
      </div>
      
      <div>
        <Card variant="glass" className="h-full">
          <h4 className="text-lg font-semibold mb-4">Code Example: Transaction Size</h4>
          
          <div className="mb-6">
            <div className="text-sm font-medium text-red-500 mb-2">Inefficient</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`// Multiple separate transactions
// Transaction 1
public entry fun transfer_token(
  sender: &signer,
  recipient: address,
  amount: u64,
) { ... }

// Transaction 2
public entry fun update_metadata(
  sender: &signer,
  new_name: String,
  new_description: String,
) { ... }

// Each requires separate signature & processing`}</code>
            </pre>
          </div>
          
          <div>
            <div className="text-sm font-medium text-green-500 mb-2">Optimized</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`// Combined transaction
public entry fun transfer_and_update(
  sender: &signer,
  recipient: address,
  amount: u64,
  new_name: String,
  new_description: String,
) {
  // Handle transfer
  transfer_token_internal(sender, recipient, amount);
  
  // Handle metadata update
  update_metadata_internal(sender, new_name, new_description);
}

// Single signature, one-time processing`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
};

const BestPracticesContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold mb-4">Gas-Efficient Coding Practices</h3>
        <p className="text-gray-700 mb-6">
          Beyond specific optimizations, following these general practices will help you write more gas-efficient Move code on Aptos.
        </p>
        
        <ul className="space-y-4 mb-6">
          <OptimizationItem title="Avoid excessive function calls">
            Especially for public functions that require signature verification.
          </OptimizationItem>
          <OptimizationItem title="Use constants for fixed values">
            Pre-defined constants are more efficient than computed values.
          </OptimizationItem>
          <OptimizationItem title="Leverage in-memory operations">
            Process data in memory before writing to storage.
          </OptimizationItem>
        </ul>
      </div>
      
      <div>
        <Card variant="glass" className="h-full">
          <h4 className="text-lg font-semibold mb-4">Code Example: Better Practices</h4>
          
          <div className="mb-6">
            <div className="text-sm font-medium text-red-500 mb-2">Inefficient</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`module example::inefficient_practices {
  // Recomputing values
  public fun get_fee_percentage(): u64 {
    5 * calculate_complex_value()
  }
  
  public fun process_data(data: &vector<u8>) {
    // Multiple storage reads & writes in a loop
    let i = 0;
    while (i < vector::length(data)) {
      let current = *vector::borrow(data, i);
      update_storage(current); // Storage write each iteration
      i = i + 1;
    }
  }
}`}</code>
            </pre>
          </div>
          
          <div>
            <div className="text-sm font-medium text-green-500 mb-2">Optimized</div>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              <code>{`module example::efficient_practices {
  // Using constant
  const FEE_PERCENTAGE: u64 = 5;
  
  public fun get_fee_percentage(): u64 {
    FEE_PERCENTAGE
  }
  
  public fun process_data(data: &vector<u8>) {
    // Process in memory first
    let results = vector::empty<u8>();
    let i = 0;
    while (i < vector::length(data)) {
      let current = *vector::borrow(data, i);
      let processed = process_value(current);
      vector::push_back(&mut results, processed);
      i = i + 1;
    }
    
    // Single storage write at the end
    update_storage_batch(&results);
  }
}`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
};

const OptimizationItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-600 mt-1">{children}</div>
      </div>
    </li>
  );
};

export default Strategies;

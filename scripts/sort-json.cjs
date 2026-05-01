const fs = require('fs');
const path = require('path');

function sortJsonFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Error: File ${filePath} does not exist`);
      return false;
    }

    if (!filePath.endsWith('.json')) {
      console.error(`❌ Error: ${filePath} is not a JSON file`);
      return false;
    }

    console.log(`📝 Start sorting ${path.basename(filePath)}...`);

    const originalContent = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(originalContent);

    console.log(`📊 File contains ${Object.keys(jsonData).length} translation keys`);

    const sortedKeys = Object.keys(jsonData).sort();
    const sortedData = {};

    sortedKeys.forEach((key) => {
      sortedData[key] = jsonData[key];
    });

    const sortedContent = JSON.stringify(sortedData, null, 2);

    fs.writeFileSync(filePath, sortedContent, 'utf8');

    console.log(`✅ ${path.basename(filePath)} has been sorted in alphabetical order!`);

    if (sortedKeys.length > 0) {
      console.log('📋 First 5 keys:');
      sortedKeys.slice(0, 5).forEach((key, index) => {
        const value = jsonData[key];
        const displayValue = value.length > 50 ? value.substring(0, 50) + '...' : value;
        console.log(`   ${index + 1}. ${key}: "${displayValue}"`);
      });

      if (sortedKeys.length > 5) {
        console.log(`\n📋 Last 5 keys:`);
        sortedKeys.slice(-5).forEach((key, index) => {
          const value = jsonData[key];
          const displayValue = value.length > 50 ? value.substring(0, 50) + '...' : value;
          console.log(`   ${sortedKeys.length - 5 + index + 1}. ${key}: "${displayValue}"`);
        });
      }
    }

    return true;
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return false;
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('🔧 JSON translation file sorting tool');
    console.log('\n📖 Usage:');
    console.log('  node sort-json.cjs <file path>');
    console.log('\n📝 Example:');
    console.log('  node sort-json.cjs ./locales/zh-TW/translation.json');
    console.log('  node sort-json.cjs ./locales/zh-TW/message.json');
    console.log('  node sort-json.cjs ./locales/zh-TW/rpc.json');
    console.log('\n✨ Features:');
    console.log('  - Sort JSON files alphabetically by key');
    console.log('  - Preserve original JSON formatting and indentation');
    console.log('  - Directly modify the original file');
    console.log('  - Display before and after comparison information');
    return;
  }

  const filePath = args[0];

  const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath);

  console.log(`🎯 Target file: ${absolutePath}`);

  const success = sortJsonFile(absolutePath);

  if (success) {
    console.log('\n🎉 Sorting completed!');
  } else {
    console.log('\n💥 Sorting failed!');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { sortJsonFile };

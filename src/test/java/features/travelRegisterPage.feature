Feature: Register Account

  @register
  Scenario: Title
    Given I open Php Travel page
    When I input to Register form

      | FirstName  | LastName | Phone      | Email                 | Password |
      | PHan Viet  | Nhan     | 0935602450 | vietnhan@gmail.com    | 1231233  |
      | Ho Tri     | Bao      | 9876543432 | vietndsahan@gmail.com | 1231233  |
      | Phan Van   | Ca       | 0321542450 | hehehe@gmail.com      | 1231233  |
      | Hoang Viet | Hoan     | 0967865667 | conbo@gmail.com       | 1231233  |
      | Tuan Viet  | Truc     | 5568768900 | aloalo@gmail.com      | 1231233  |
      | Ng Trung   | Lap      | 1235435354 | helloxinh@gmail.com   | 1231233  |
